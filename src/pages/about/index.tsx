import { t } from '@/utils/i18n';
import {
  CompassOutlined,
  EnvironmentOutlined,
  MinusSquareOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Divider, Space, Tag } from 'antd';
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CurrentPage from './current';
import MasterPage from './master';
import NextPage from './next';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: t('RPEItePr' /* 熟悉 */),
    children: <CurrentPage />,
  },
  {
    key: '2',
    label: t('XOuyfSDb' /* 掌握 */),
    children: <MasterPage />,
  },
  {
    key: '3',
    label: t('HJMBCYkK' /* 想学 */),
    children: <NextPage />,
  },
];

const aboutPage: React.FC = () => {
  return (
    <>
      <div className="w-full h-full flex p-10">
        <div className="flex-[2.5] mr-5">
          <Card className="h-[620px] py-2 px-4 flex flex-col shadow-lg">
            <div className="h-[300px] flex items-center flex-col justify-start">
              <img
                className="w-[100px] aspect-auto rounded-[50%]"
                src="/images/author.jpg"
                alt={t('HaLzGNdm' /* 失败 */)}
              />
              <div className="flex flex-col justify-center items-center">
                <h6 className="mt-6 text-xl font-sans text-[#000000d8] dark:text-white font-medium ">
                  Monster
                </h6>
                {/* <span>越努力越幸运</span> */}
              </div>
              <div className="flex flex-col self-start justify-start mt-10">
                <span>
                  <MinusSquareOutlined />{' '}
                  <span className="ml-1">{t('kQgYFwML' /* 前端爱好者 */)}</span>
                </span>
                <span className="mt-1">
                  <CompassOutlined />
                  <span className="ml-1">
                    {t('AbmkKtbi' /* 一站式前端内容网站 */)}
                  </span>
                </span>
                <span className="mt-1">
                  <EnvironmentOutlined />
                  <span className="ml-1">{t('CgbSxHyw' /* 广东茂名 */)}</span>
                </span>
              </div>
            </div>
            <Divider></Divider>
            <div className="h-[100px] flex flex-col justify-start">
              <div className="h-[14px]">
                <span>{t('ZhPVxGdJ' /* 标签 */)}</span>
              </div>
              <Space className="flex-1 mt-3 flex justify-start flex-wrap">
                <Tag color="#7c4dff">{t('VjAFlyWg' /* 有想法 */)}</Tag>
                <Tag color="#7c4dff">{t('RsqOnrUH' /* 执行力强 */)}</Tag>
                <Tag color="#7c4dff">{t('hlUpsLPv' /* 交朋友 */)}</Tag>
                <Tag color="#7c4dff">{t('loeMJFYN' /* 喜欢篮球 */)}</Tag>
                <Tag color="#7c4dff">{t('RCKlrgpk' /* 热爱前端 */)}</Tag>
                <Tag color="#7c4dff">{t('WUBhCShB' /* 挣钱 */)}</Tag>
              </Space>
              <Divider></Divider>
            </div>
            <div className="h-[200px] flex flex-col justify-around">
              <div className="h-[14px] mt-4">
                <span>{t('SBWISjry' /* 特别鸣谢 */)}</span>
              </div>
              <div className="flex-1 flex justify-start mt-4 items-start">
                <Avatar src="/images/dbfu.awebp" alt="" />
                <span className="mt-[6px] ml-2">dbfu</span>
                <Avatar src="/images/meng.jpg" alt="" className="ml-5" />
                <span className="mt-[6px] ml-2">meng</span>
              </div>
            </div>
          </Card>
        </div>
        <Card className=" flex-[5.5]  py-5 shadow-lg">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Card>
      </div>
    </>
  );
};
export default aboutPage;
