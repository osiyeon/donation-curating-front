import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import CampaignBody from "../../containers/campaign/CampaignBody";
import Header from "../../components/common/Header";

function Campaign() {
  return (
    <>
      <Header searchBox />
      <CampaignBody />
    </>
  );
}

export default Campaign;
