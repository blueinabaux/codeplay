import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AlertDialog from "../../Modals/AlertDialog";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const columns = [
  { id: "srno", label: "Sr no.", minWidth: 50, align: "center" },
  { id: "problemNo", label: "PROBLEM ID", minWidth: 50, align: "center" },
  {
    id: "problemStatement",
    label: "PROBLEM TITLE",
    minWidth: 170,
    align: "center",
  },
  { id: "domain", label: "DOMAIN", minWidth: 170, align: "center" },
  {
    id: "desc",
    label: "Description",
    minWidth: 170,
    align: "center",
    hidden: true,
  }, // Hidden description column
];
function createData(srno, problemNo, problemStatement, domain, desc, input) {
  return { srno, problemNo, problemStatement, domain, desc, input };
}

const newRows = [];

const Agrirows = [
  createData(
    1,
    "T2K25A1",
    "Crop Disease Detection",
    "Agriculture",
    "Develop a system that can analyze images of crops to identify signs of common diseases. The system should be able to provide recommendations for treatment based on the detected disease.",
    "An image of a crop leaf with visible symptoms.\n- A database of disease patterns and treatments."
  ),
  
  createData(
    2,
    "T2K25A2",
    "Precision Irrigation System",
    "Agriculture",
    "Create an application that determines the optimal amount of water required for crops based on weather forecasts, soil moisture levels, and crop types. The system should generate irrigation schedules to minimize water usage while maximizing crop yield.",
    "Real-time weather data (temperature, rainfall forecast).\n- Soil moisture data from sensors.\n- Crop type and growth stage information."
  ),
  
  createData(
    3,
    "T2K25A3",
    "Farm-to-Table Supply Chain Optimization",
    "Agriculture",
    "Design a solution to optimize the supply chain from farms to consumers. The system should minimize transportation costs and spoilage while ensuring timely delivery of fresh produce.",
    "List of farms with their produce, quantities, and locations.\n- List of consumers with their orders and delivery locations.\n- Transportation costs and available delivery vehicles."
  ),
  
  createData(
    4,
    "T2K25A4",
    "Automated Pest Management",
    "Agriculture",
    "Develop a system that uses sensor data and machine learning to predict pest outbreaks and suggest management strategies. The system should be able to provide alerts and recommendations to farmers.",
    "Sensor data (temperature, humidity, pest counts).\n- Historical pest outbreak data.\n- Crop type and planting season information."
  ),
  
  createData(
    5,
    "T2K25A5",

    "Soil Health Monitoring",
    "Agriculture",
    "Create an application that monitors soil health using data from various sensors (pH, nutrient levels, moisture). The application should provide actionable insights to improve soil quality and crop productivity.",
    "Soil sensor data (pH, nutrient levels, moisture).\n- Crop type and soil requirements.\n- Historical soil health data."
  ),
  
  createData(
    6,
    "T2K25A6",
    "Yield Prediction using Remote Sensing",
    "Agriculture",
    "Develop a machine learning model that uses satellite imagery or drone data to predict crop yields. The model should consider various factors such as crop type, growth stage, and weather conditions.",
    "Satellite or drone images of the crop fields.\n- Crop type and growth stage data.\n- Historical yield data and weather conditions."
  ),
  
  createData(
    7,
    "T2K25A7",

    "Farm Equipment Maintenance Scheduling",
    "Agriculture",
    "Create a system that monitors the condition of farm equipment and schedules maintenance tasks to prevent breakdowns. The system should use sensor data and historical maintenance records.",
    "Sensor data from farm equipment (e.g., engine temperature, vibration levels).\n- Historical maintenance records.\n- Equipment usage data."
  ),
  
  createData(
    8,
    "T2K25A8",

    "Nutrient Management Optimization",
    "Agriculture",
    "Design an application that optimizes the application of fertilizers and soil amendments based on crop needs, soil conditions, and environmental impact. The system should minimize cost while maximizing crop productivity and sustainability.",
    "Soil nutrient levels and pH data.\n- Crop type and growth stage information.\n- Fertilizer and soil amendment options and their costs."
  ),
  
  createData(
    9,
    "T2K25A9",
    "Automated Harvesting System",
    "Agriculture",
    "Develop a system that uses robotics and computer vision to automate the harvesting of specific crops. The system should identify ripe produce and handle it efficiently to reduce waste and labor costs.",
    "Images or video feeds of the crop field.\n- Data on crop ripeness and harvesting criteria.\n- Specifications for handling and harvesting equipment."
  ),
  
  createData(
    10,
    "T2K25A10",

    "Climate Adaptation Strategies for Crops",
    "Agriculture",
    "Create a decision-support tool that helps farmers adapt their crop management strategies based on changing climate conditions. The tool should recommend crop varieties, planting schedules, and management practices suited to future climate scenarios.",
    "Historical and projected climate data (temperature, precipitation).\n- Crop variety information and their climate adaptability.\n- Current farming practices and crop types."
  ),
  
  createData(
    11,
    "T2K25A11",
    "Water Quality Monitoring System",
    "Agriculture",
    "Develop a system for real-time monitoring of water quality used for irrigation. The system should detect contaminants and provide recommendations for treatment or alternative water sources.",
    "Real-time water quality data (pH, turbidity, contaminants).\n- Irrigation water sources and their characteristics.\n- Crop requirements for water quality."
  ),
  
  createData(
    12,
    "T2K25A12",
    "Farmer Advisory System for Market Prices",
    "Agriculture",
    "Build a system that provides farmers with real-time market prices for their produce and predicts future price trends. The system should help farmers make informed decisions about when and where to sell their crops.",
    "Real-time market price data for various crops.\n- Historical price trends and market demand data.\n- Location and type of crops grown by the farmer."
  )
  
];

const Edurows = [
  createData(
    1,
    "T2K25B1",
    "Adaptive Quiz Generator",
    "Education Technology",
    "Develop an adaptive quiz generator that tailors questions to the learner's skill level.",
    "A list of mathematical topics (e.g., Algebra, Geometry, Calculus) with associated difficulty levels.\nA user profile containing their current skill level in each topic.\nA set of questions categorized by topic and difficulty.",
    
  ),

  createData(
    2,
    "T2K25B2",

    "Interactive Problem Solver",
    "Education Technology",
    "Create an interactive tool that helps users solve mathematical problems step-by-step.",
    "A mathematical problem (e.g., equation, geometry problem).\nA set of possible steps or hints for solving the problem.",
   
  ),

  createData(
    3,
    "T2K25B3",
    "Math Learning Progress Tracker",
    "Education Technology",
    "Design a system that tracks a learner’s progress and provides feedback on their strengths and areas for improvement.",
    "A set of completed math exercises with scores.\nA list of topics covered and their respective weights.",
  
  ),
  createData(
    4,
    "T2K25B4",

    "Personalized Learning Pathway Generator",
    "Education Technology",
    "Create a system that generates a personalized learning pathway for students based on their individual strengths, weaknesses, and learning preferences.",
    "Student profile including current knowledge level, learning style (visual, auditory, kinesthetic), and educational goals.\nA database of educational resources categorized by subject and difficulty.",
    
  ),
  createData(
    5,
    "T2K25B5",

    "Real-Time Feedback System for Assignments",
    "Education Technology",
    "Develop a system that provides real-time feedback to students on their assignments, helping them understand mistakes and learn more effectively.",
    "A student’s submitted assignment in a digital format (e.g., essay, math problem).\nA rubric or set of criteria for grading.",
    
  ),

  createData(
    6,
    "T2K25B6",

    "Dynamic Class Scheduling System",
    "Education Technology",
    "Build a system that dynamically schedules classes based on students' availability, teacher preferences, and classroom resources.",
    "A list of students with their available time slots.\nA list of teachers with their available time slots and preferences.\nA list of classrooms with their availability.",
    
  ),

  createData(
    7,
    "T2K25B7",

    "Teacher Performance and Feedback Analytics",
    "Education Technology",
    "Design a system that collects and analyzes feedback on teachers from students and provides insights into performance and areas for improvement.",
    "Feedback data from students, including ratings and comments on various aspects of teaching (e.g., clarity, engagement).\nTeacher profiles with details on their classes and teaching methods.",
    
  ),
];


const Healthrows = [
  createData(
    1,
    "T2K25C1",
    "Predictive Analytics for Patient Readmissions",
    "Healthcare",
    "Develop a predictive analytics tool to forecast the likelihood of patient readmissions within 30 days of discharge. The tool should help hospitals proactively manage care and reduce readmission rates.",
    "Patient demographics and medical history.\nData on previous admissions, treatments, and outcomes.\nDischarge summaries and follow-up appointment schedules.",
  ),
  createData(
    2,
    "T2K25C2",
    "AI-Based Diagnostic Assistance",
    "Healthcare",
    "Create an AI-based diagnostic tool that assists doctors in diagnosing diseases from medical imaging (e.g., X-rays, MRIs). The tool should identify abnormalities and provide potential diagnoses based on image analysis.",
    "Medical images (e.g., X-rays, MRIs).\nPatient demographic information and clinical history.\nDataset of known diseases and image characteristics.",
    
  ),
  createData(
    3,
    "T2K25C3",

    "Medication Adherence Monitoring System",
    "Healthcare",
    "Develop a system that monitors patient adherence to prescribed medication regimens using digital pillboxes or wearable devices. The system should send reminders and alerts to patients and healthcare providers.",
    "Data from digital pillboxes or wearable devices (e.g., medication timestamps, doses taken).\nPatient medication schedules and prescriptions.\nContact information for patients and healthcare providers.",

  ),
  createData(
    4,
    "T2K25C4",

    "Telemedicine Appointment Scheduler",
    "Healthcare",
    "Design an intelligent scheduling system for telemedicine appointments that optimizes appointment slots based on patient urgency, doctor availability, and time zone differences.",
    "Patient requests and urgency levels.\nDoctor availability and time zone information.\nExisting appointment schedules.",

  ),
  createData(
    5,
    "T2K25C5",

    "Real-Time Health Monitoring System",
    "Healthcare",
    "Develop a real-time health monitoring system that aggregates data from various wearable devices and sensors to provide continuous health status updates and alert healthcare providers in case of anomalies.",
    "Data from wearable devices (e.g., heart rate, blood pressure, activity levels).\nPatient baseline health data and historical trends.\nThresholds for abnormal health metrics.",
    
  ),
  createData(
    6,
    "T2K25C6",

    "Chronic Disease Management Platform",
    "Healthcare",
    "Create a platform to manage chronic diseases such as diabetes or hypertension by integrating patient data, providing educational resources, and tracking treatment adherence.",
    "Patient data on chronic conditions (e.g., blood glucose levels, blood pressure readings).\nTreatment plans and medication schedules.\nEducational content and self-management resources.",
    
  ),
  createData(
    7,
    "T2K25C7",

    "Mental Health Support Chatbot",
    "Healthcare",
    "Develop a chatbot that provides mental health support by engaging in conversations with users, offering coping strategies, and directing them to professional help when needed.",
    "User input during chatbot interactions (e.g., mood, stress levels).\nDatabase of mental health resources and coping strategies.\nCrisis intervention protocols and contact information for mental health professionals.",
   
  ),
  createData(
    8,
    "T2K25C8",
    "Health Risk Assessment Tool",
    "Healthcare",
    "Build a tool that assesses individual health risks based on lifestyle factors, medical history, and genetic predispositions. The tool should provide personalized recommendations for risk reduction.",
    "User-provided data on lifestyle factors (e.g., diet, exercise, smoking).\nMedical history and family history of diseases.\nGenetic predisposition information (if available).",
    
  ),
  createData(
    9,
    "T2K25C9",

    "Healthcare Data Integration System",
    "Healthcare",
    "Develop a system that integrates data from multiple healthcare sources (e.g., electronic health records, lab results, and imaging) to provide a comprehensive view of patient health.",
    "Data from various healthcare systems (e.g., EHRs, lab reports, imaging files).\nPatient identifiers to merge and match records.\nData standards and formats from different sources.",
    
  ),
  createData(
    10,
    "T2K25C10",
    
    "Virtual Rehabilitation Assistant",
    "Healthcare",
    "Create a virtual rehabilitation assistant that guides patients through physical therapy exercises using video demonstrations and real-time feedback on their performance.",
    "Exercise protocols and guidelines for various rehabilitation exercises.\nPatient data on injury or condition and current physical capabilities.\nVideo demonstrations and real-time feedback mechanisms.",
   
  )
];

const Safetyrows = [
  createData(
    1,
    "T2K25D1",

    "Emergency Alert System",
    "Women & Child Safety",
    "Design an emergency alert system that allows users to send a distress signal to predefined contacts with their location and a brief message. The system should include a mobile app interface for sending alerts and a backend server to process and relay these alerts.",
    "User Input:\n- UserID: Unique identifier for the user.\n- Message: A brief distress message.\n- Location: GPS coordinates (latitude, longitude).\nBackend Server Input:\n- UserID: Unique identifier of the user sending the alert.\n- Message: Distress message from the user.\n- Location: GPS coordinates of the user's location.\n- Contacts: List of emergency contacts.",
    
  ),
  createData(
    2,
    "T2K25D2",
    "Safe Routes Recommendation",
    "Women & Child Safety",
    "Develop a system that recommends safe routes for individuals traveling in high-risk areas. The system should use historical crime data and user-defined preferences to suggest the safest routes.",
    "User Input:\n- Starting Location: GPS coordinates of the starting point.\n- Destination: GPS coordinates of the destination.\n- Preferences: User preferences for route.\nHistorical Data Input:\n- Crime Data: Location, Type, Date Time of crime incidents.",
   
  ),
  createData(
    3,
    "T2K25D3",

    "Child Tracking and Alerts",
    "Women & Child Safety",
    "Create a system for tracking children’s whereabouts and sending alerts if they deviate from a predefined safe zone. The system should include a wearable device for the child and a monitoring application for parents.",
    "Wearable Device Data:\n- Child_ID: Unique identifier for the child.\n- Current Location: GPS coordinates.\n- Safe Zone: GPS coordinates and radius defining the safe zone.\nParent Monitoring App Input:\n- ParentID: Unique identifier for the parent.\n- ChildID: ID of the child being monitored.",
    
  ),
  createData(
    4,
    "T2K25D4",
    "Incident Reporting and Response System",
    "Women & Child Safety",
    "Develop a web-based incident reporting system that allows users to report safety incidents, categorize them, and track their resolution. The system should be able to generate reports and notify authorities if necessary.",
    "User Input:\n- IncidentID: Unique identifier for the incident report.\n- IncidentType: Type of incident.\n- Location: GPS coordinates or address.\n- Description: Detailed description of the incident.\n- Severity: Severity level.",
    
  ),
  createData(
    5,
    "T2K25D5",
    "Virtual Safe Space App",
    "Women & Child Safety",
    "Design a virtual safe space app that allows users to join a safe online community where they can share their location, request immediate help, and receive emotional support anonymously if they are in distress.",
    "User Input:\n- UserID: Unique identifier for the user.\n- Location: GPS coordinates of the user's current location.\n- DistressMessage: Message indicating their situation.\n- SupportRequest: Type of support requested.",
  ),
  
];

let rows = [];

export default function StickyHeadTable({ tabs, problemStatements = [] }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedProblem, setSelectedProblem] = React.useState({
    title: "",
    desc: "",
    input: "",
    output: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (title, desc, input, output) => {
    setSelectedProblem({ title, desc, input, output });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const problemStatementsRow = problemStatements.map((item) =>
    createData(item.id, item.pno, item.ps, item.domain)
  );
  if (!problemStatements || problemStatements.length === 0) {
    // return <div style={{ color: 'white' }}>No problemStatements available.</div>;
    if (tabs == 1) {
      rows = Agrirows;
    } else if (tabs == 2) {
      rows = Edurows;
    } else if (tabs == 3) {
      rows = Healthrows;
    } else if (tabs == 4) {
      rows = Safetyrows;
    } else {
      return (
        <div style={{ color: "white" }}>No problemStatements available.</div>
      );
    }
  } else {
    rows = problemStatementsRow;
  }

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#242424",
          paddingX: "2vw",
          borderRadius: "2vw",
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" sx={{ color: "white" }}>
            <TableHead>
              <TableRow>
                {columns.map(
                  (column) =>
                    !column.hidden && (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          color: "white",
                          backgroundColor: "#242424",
                          fontFamily: "Dela Gothic",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.srno}
                      onClick={() =>
                        handleClickOpen(
                          row.problemStatement,
                          row.desc,
                          row.input,
                        )
                      }
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          !column.hidden && (
                            <TableCell
                              sx={{
                                color: "white",
                                border: "none",
                              }}
                              key={column.id}
                              align={column.align}
                              hover
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ color: "white" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="problem-description-title"
        aria-describedby="problem-description-text"
        PaperProps={{
          style: {
            height: "52vh", // Increase the height of the modal
            maxHeight: "90vh", // Optional: Max height to prevent overflow on large screens
            backgroundColor:"#27272A"
          },
        }}
      >
        <DialogTitle
          className="h-[10vh] max-sm:h-auto flex justify-start items-center bg-zinc-800 text-white font-semibold"
          id="problem-description-title"
        >
          <p className="font-bold text-[1.4vw]  max-sm:text-[3vh] text-yellow-300 ">{selectedProblem.title}</p>
        </DialogTitle>
        <DialogContent className="bg-zinc-800 max-sm:h-auto h-[50vh] mt-3 flex flex-col justify-start items-start p-4 overflow-y-auto">
          <DialogContentText id="problem-description-text">
            <p className="text-[#d4d4d4] mb-4">{selectedProblem.desc}</p>
            {/* Display the input field */}
            <p className="text-[#d4d4d4] mb-2 font-bold">Input:</p>
            <ul className="text-[#b4b4b4] list-disc list-inside">
              {selectedProblem.input?.split("\n").map((line, index) => (
                <li key={index} className="mb-1">
                  {line}
                </li>
              ))}
            </ul>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions className="bg-zinc-800 h-[10vh]">
          <button
            className="bg-white max-sm:text-[1.5vh] max-sm:px-[5vw] text-[0.9vw] px-[2vw] py-[1.2vh] rounded-full"
            onClick={handleClose}
          >
            CLOSE
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
