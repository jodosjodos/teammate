import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "80%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{ height: "12px" ,borderRadius:"5px"}} // Set the height directly on LinearProgress
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearLoading() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-0 md:py-24 lg:py-0 sm:py-64">
      <div className=" flex items-center justify-center">
        <img src="images/loadingLogo.png" alt="loading" className="lg:w-[80%] md:w-[50%] sm:w-[30%]" />
      </div>
      <Box sx={{ width: "40%", marginBottom: "0" }}> {/* Set marginBottom to "0" */}
        <LinearProgressWithLabel value={progress} />
      </Box>
    </div>
  );
}
