import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList/";
import TabPanel from "@material-ui/lab/TabPanel";
import "./tab.css";
import { MdLanguage } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsEnvelope,
  BsFillLayersFill,
} from "react-icons/bs";
import TabComponentInternet from "./TabComponentInternet";
import TabComponentCall from "./TabComponentCall";
import TabComponentMessage from "./TabComponentMessage";
import TabComponentBagDigital from "./TabComponentBagDigital";

export default function TabMenuCenter() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="shadow-lg rounded-sm">
      <TabContext value={value}>
        <TabList
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
        >
          <Tab icon={<MdLanguage size={28} />} label="اینترنت" value="1" />
          <Tab
            icon={<BsFillTelephoneFill size={25} />}
            label="مکالمه"
            value="2"
          />
          <Tab icon={<BsEnvelope size={28} />} label="پیامک" value="3" />
          <Tab
            icon={<BsFillLayersFill size={28} />}
            label="کیف دیجیتال"
            value="4"
          />
        </TabList>

        <TabPanel value="1">
          <TabComponentInternet />
        </TabPanel>
        <TabPanel value="2">
          <TabComponentCall />
        </TabPanel>
        <TabPanel value="3">
          <TabComponentMessage />
        </TabPanel>
        <TabPanel value="4">
          <TabComponentBagDigital />
        </TabPanel>
      </TabContext>
    </div>
  );
}
