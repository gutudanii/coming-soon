import { Card, CardContent, Typography } from "@mui/material";
import { GitHub, Feedback, School } from "@mui/icons-material";

const Community = () => {
  return (
    <>
      {/* community section */}
      <div className="container p-6">
        <Typography variant="h4" align="center" gutterBottom>
          Community Involvement
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div>
            <Card
              className="h-full shadow-none"
              elevation={0}
              sx={{ boxShadow: "none" }}
            >
              <CardContent className="text-center">
                <GitHub className="fill-gray-900" sx={{ fontSize: 100 }} />
                <Typography variant="h6" gutterBottom>
                  Open Source Collaboration
                </Typography>
                <Typography variant="body1">
                  AddisFinancial uses GitHub as a central platform for
                  collaboration. Developers from around the world can contribute
                  to the project, suggest improvements, and help shape the
                  future of the platform.
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card
              className="h-full shadow-none"
              elevation={0}
              sx={{ boxShadow: "none" }}
            >
              <CardContent className="text-center">
                <Feedback className="fill-gray-900" sx={{ fontSize: 100 }} />
                <Typography variant="h6" gutterBottom>
                  User Feedback and Participation
                </Typography>
                <Typography variant="body1">
                  The organization actively seeks feedback from its users, using
                  it to guide the development of new features and services. This
                  ensures that the platform remains relevant and user-centric.
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card
              className="h-full shadow-none"
              elevation={0}
              sx={{ boxShadow: "none" }}
            >
              <CardContent className="text-center">
                <School className="fill-gray-900" sx={{ fontSize: 100 }} />
                <Typography variant="h6" gutterBottom>
                  Financial Educational Tips
                </Typography>
                <Typography variant="body1">
                  The platform provides educational resources and tips to help
                  users make informed financial decisions and improve their
                  financial literacy.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
