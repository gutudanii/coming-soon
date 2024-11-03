import { Card, CardContent, Typography, Box } from "@mui/material";

const Mission = () => {
  return (
    <>
      {/* vision section  */}
      <div className="container px-6">
        <Typography variant="h4" align="center" gutterBottom>
          Vision and Mission
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }} // Stack items vertically on mobile, horizontally on larger screens
          justifyContent="center"
          gap={2}
          sx={{ width: "100%" }} // Full width to allow responsive stacking
        >
          <Card
            className="shadow-none"
            elevation={0}
            sx={{ boxShadow: "none" }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                className="text-[#333] font-bold text-2xl"
              >
                Vision
              </Typography>
              <Typography variant="body1">
                AddisFinancial envisions a world where African communities, both
                within the continent and across the diaspora, have equal access
                to financial tools and resources. By leveraging technology and
                community-driven initiatives, AddisFinancial seeks to create a
                platform that democratizes financial services, making them
                accessible, secure, and tailored to the unique needs of African
                users.
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="shadow-none"
            elevation={0}
            sx={{ boxShadow: "none" }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                className="text-[#333] font-bold text-2xl"
              >
                Mission
              </Typography>
              <Typography variant="body1">
                The mission of AddisFinancial is to build a decentralized
                financial ecosystem that connects the Ethiopian community to
                global financial markets, particularly those in the United
                States and Asia. This platform offers a range of services.
                AddisFinancial aims to foster financial inclusion, encourage
                savings, and promote investment within African communities, all
                while maintaining a strong focus on security, transparency, and
                education.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default Mission;
