import React, { useState, useEffect, useMemo } from "react";

import { Box, Tab, Typography, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import Proceed from "./Proceed";
import Test from "./Test";

import { useNavigate, useLocation, Link } from "react-router-dom";
import Sent from "../pages/Sentiment";
import Timer from "./Timer";
import HR from "../pages/HR";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const TabSec = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const paths = useMemo(() => ["/testpage/proceed", "/testpage/test", "/testpage/apt","/testpage/hr"], []);

  useEffect(() => {
    const value = paths.indexOf(pathname);
    setValue(value !== -1 ? value : 0);
  }, [pathname, paths]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(paths[newValue]);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" } }>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Test tabs"
          centered
        >
          <Tab
            label="Conditions"
            disabled
            {...a11yProps(0)}
            component={Link}
            to={`/testpage/proceed`}
          />
          <Tab
            label="Test"
            disabled
            {...a11yProps(1)}
            component={Link}
            to={`/testpage/test`}
          />
          <Tab
            label="Managerial Round"
            disabled
            {...a11yProps(2)}
            component={Link}
            to={`/testpage/apt`}
          />
          <Tab
            label="HR Round"
            disabled
            {...a11yProps(3)}
            component={Link}
            to={`/testpage/hr`}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Proceed />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Timer/>
        <Test />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Sent/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HR/>
      </TabPanel>
    </div>
  );
};

export default TabSec;
