import UserButton from '@/src/components/button/user';
import InfoSVG from '@/src/components/icons/info-svg';
import { useExpandToolTip } from './hooks/use-expand';

export default function ToolTipButton() {
  const { expandSheet } = useExpandToolTip();

  return (
    <>
      <UserButton handlePress={expandSheet}>
        <InfoSVG />
      </UserButton>
    </>
  );
}
