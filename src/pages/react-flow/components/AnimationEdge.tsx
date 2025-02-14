import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { BaseEdge, EdgeProps, getBezierPath } from 'reactflow';

const AnimationEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
}: EdgeProps) => {
  const pathRef = useRef<any>(null);
  const [edgePoint, setEdgePoint] = useState(0);
  const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });
  const [currentLength, setCurrentLength] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // 根据状态计算边的颜色
  const edgeColor = useMemo(() => {
    if (data?.hasError) return '#f87171';
    if (data?.isFinished) return '#42B983';
    if (data?.isCancelled || data?.isSkipped) return '#fbbf24';
    if (data?.isRunning || isAnimating) return '#2563eb';
    return '#6b7280';
  }, [data, isAnimating]);

  // 重置动画状态
  const reset = useCallback(() => {
    setEdgePoint(0);
    setCurrentLength(0);
    setLabelPosition({ x: 0, y: 0 });
    setIsAnimating(false);
  }, []);

  // 运行动画
  const runAnimation = useCallback(() => {
    if (!pathRef.current) return;

    const pathEl = pathRef.current;
    const totalLength = pathEl.getTotalLength();

    setIsAnimating(true);

    if (currentLength !== totalLength) {
      setCurrentLength(totalLength);
    }

    const duration = Math.max(1500, totalLength / 2);
    const start = performance.now();

    const animate = (currentTime: number) => {
      if (!isAnimating) return;

      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const point = totalLength * progress;

      setEdgePoint(point);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        reset();
      }
    };

    requestAnimationFrame(animate);
  }, [currentLength, isAnimating, reset]);

  // 监听数据变化触发动画
  useEffect(() => {
    if (data?.isFinished) {
      runAnimation();
    }
  }, [data?.isFinished, runAnimation]);

  // 监听取消状态
  useEffect(() => {
    if (data?.isCancelled) {
      reset();
    }
  }, [data?.isCancelled, reset]);

  // 更新标签位置
  useEffect(() => {
    if (!pathRef.current || !edgePoint || !isAnimating) return;
    const point = pathRef.current.getPointAtLength(edgePoint);
    setLabelPosition(point);
  }, [edgePoint, isAnimating]);

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          ...style,
          stroke: edgeColor,
        }}
      />
      {isAnimating && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[100]"
          style={{
            transform: `translate(${labelPosition.x}px, ${labelPosition.y}px)`,
          }}
        >
          <span className="relative inline-block scale-x-[-1]">
            <span className="absolute -top-[10px]">📦</span>
            🚚
          </span>
        </div>
      )}
    </>
  );
};

export default AnimationEdge;
