import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
  },
}));
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  tabone?: React.ReactNode;
  tabtwo?: React.ReactNode;
  tabthree?: React.ReactNode;
  tabonetitle?: string;
  tabtwotitle?: string;
  tabthreetitle?: string;
}

const BasicTabs: React.FC<BasicTabsProps> = ({
  tabone,
  tabtwo,
  tabthree,
  tabonetitle,
  tabtwotitle,
  tabthreetitle,
}) => {
  const [value, setValue] = React.useState(0);
  const t = useTranslations("Publications");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    { label: tabonetitle, content: tabone },
    { label: tabtwotitle, content: tabtwo },
    { label: tabthreetitle, content: tabthree },
  ].filter((tab) => tab.label && tab.content); // Filter out tabs without title or content

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent:
            pathAfterSlash === "ar" && !tabthree ? "flex-end" : "flex-start",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            ".Mui-selected": {
              color: `#476B87 !important`,
            },
            flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
            "& .MuiTabs-indicator": {
              backgroundColor: "#476B87",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#476B87",
            },
          }}
          className={classes.title}
        >
          {tabs.map((tab, index) => (
            <Tab
              className={classes.title}
              key={index}
              label={t(tab.label!)}
              {...a11yProps(index)}
              sx={{
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "25.14px",

                textAlign: "left",
                color: value === index ? "#476B87" : "#476B87",
                textTransform: "none",
                padding: "12px 16px 16px 0px", // Set padding to 0px

                borderBottom:
                  value === index
                    ? "4px solid #476B87"
                    : "4px solid transparent",
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default BasicTabs;
