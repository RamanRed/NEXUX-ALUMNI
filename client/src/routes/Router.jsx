// routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginCard from '../components/Dashboard/Login/LoginCard';

// Import Dashboard Layout if you plan to use it later
import DashboardLayout from "../layouts/DashboardLayout"; 

// Import Dashboard Components when ready
import StudentDashboard from "../pages/StudentDashboard";
// import StudentProfile from "../pages/dashboard/student/StudentProfile";
// import AlumniDashboard from "../pages/dashboard/alumni/AlumniDashboard";
// import AlumniProfile from "../pages/dashboard/alumni/AlumniProfile";
// import CollegeDashboard from "../pages/dashboard/college/CollegeDashboard";
// import CollegeProfile from "../pages/dashboard/college/CollegeProfile";
// import ManageAlumni from "../pages/dashboard/college/ManageAlumni";

// Define the routes
const router = createBrowserRouter([
    // Public routes (Main Layout)
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <LoginCard />
            }
        ]
    },

    // Dashboard routes (uncomment and complete as necessary)
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            // Student Dashboard
            {
                path: "student",
                element: <StudentDashboard />,
                // children: [
                //     {
                //         path: "profile",
                //         element: <StudentProfile />
                //     }
                // ]
            },
    //         // Alumni Dashboard
    //         {
    //             path: "alumni",
    //             element: <AlumniDashboard />,
    //             children: [
    //                 {
    //                     path: "profile",
    //                     element: <AlumniProfile />
    //                 }
    //             ]
    //         },
    //         // College Dashboard
    //         {
    //             path: "college",
    //             element: <CollegeDashboard />,
    //             children: [
    //                 {
    //                     path: "profile",
    //                     element: <CollegeProfile />
    //                 },
    //                 {
    //                     path: "manage-alumni",
    //                     element: <ManageAlumni />
    //                 }
    //             ]
    //         }
        ]
    }
]);

export default router;
