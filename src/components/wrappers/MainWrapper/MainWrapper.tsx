import s from './MainWrapper.module.scss';

interface Props {
  children: React.ReactNode;
}

export const MainWrapper = ({ children }: Props) => {
  return <div className={s.content}>{children}</div>;
};
