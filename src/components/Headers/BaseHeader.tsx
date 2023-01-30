import { TitilliumText } from "components/StyledText";

import HeaderView from "./Header";

const BaseHeaderView = ({ text }: { text: string }) => {
  return (
    <HeaderView>
      <TitilliumText className="text-lg text-slate-100">{text}</TitilliumText>
    </HeaderView>
  );
};

export default BaseHeaderView;
