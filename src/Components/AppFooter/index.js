import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">Cleaning Staff contact</Typography.Link>
      <Typography.Link href="https://www.researchgate.net/publication/353152506_Inhibition_of_Ammonia_and_Hydrogen_Sulphide_Using_Plant_Waste_Materials_for_Faecal_Sludge_Odour_Control_in_Dry_Sanitation_Toilet_Facilities" target={"_blank"}>
        Citations
      </Typography.Link>
      <Typography.Link href="https://wiki.metakgp.org/w/Nalanda_complex" target={"_blank"}>
        Nalanda MAP
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
