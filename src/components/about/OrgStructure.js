"use client";

import { Card, CardContent, Typography } from "@mui/material";
import dynamic from "next/dynamic";

// Dynamically import Chart with SSR disabled
const Chart = dynamic(() => import("./Chart"), { ssr: false });

const OrgStructure = () => {
  return (
    <>
      {/* Vision Section */}
      <div className="container p-6 w-full">
        <div className="w-full flex flex-col text-center">
          <Typography variant="h4" align="center" gutterBottom>
            Organizational Structure
          </Typography>
          <Card
            className="shadow-none"
            elevation={0}
            sx={{ boxShadow: "none" }}
          >
            <CardContent>
              <Typography variant="body1">
                AddisFinancial is structured as a decentralized organization
                with a strong emphasis on community involvement...
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Chart Section */}
        <div className="w-full overflow-x-auto">
          <Chart />
        </div>
      </div>
    </>
  );
};

export default OrgStructure;
