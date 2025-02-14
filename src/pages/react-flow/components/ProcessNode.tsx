import { Handle, Position, NodeProps } from 'reactflow';
import { ProcessNodeData } from '../types';

const ProcessNode = ({
  data,
  sourcePosition,
  targetPosition,
}: NodeProps<ProcessNodeData>) => {
  const getBgColor = () => {
    if (data.hasError) return '#f87171';
    if (data.isFinished) return '#42B983';
    if (data.isCancelled) return '#fbbf24';
    return '#4b5563';
  };

  const getProcessLabel = () => {
    if (data.hasError) return '❌';
    if (data.isSkipped) return '🚧';
    if (data.isCancelled) return '🚫';
    if (data.isFinished) return '😎';
    return '🏠';
  };

  return (
    <div
      className={`flex items-center justify-center w-[36px] h-[36px] rounded-full`}
      style={{
        backgroundColor: getBgColor(),
        boxShadow: data.isRunning ? '0 0 10px rgba(0, 0, 0, 0.5)' : undefined,
      }}
    >
      <Handle
        type="target"
        position={targetPosition || Position.Left}
        style={{ opacity: 0 }}
      />
      <Handle
        type="source"
        position={sourcePosition || Position.Right}
        style={{ opacity: 0 }}
      />

      {data.isRunning ? (
        <div className="w-4 h-4 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
      ) : (
        <span>{getProcessLabel()}</span>
      )}
    </div>
  );
};

export default ProcessNode;
