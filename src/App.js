import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminAddAlumni from "./components/AdminAddAlumni";
import AdminAddAnnouncement from "./components/AdminAddAnnouncement";
import AdminProfile from "./components/AdminProfile";
import AdminAddEvent from "./components/AdminAddEvent";
import AdminAnnouncement from "./components/AdminAnnouncement";
import AdminEvents from "./components/AdminEvents";
import AdminJobListing from "./components/AdminJobListing";
import AdminPendingJobs from "./components/AdminPendingJobs";
import AdminCompanies from "./components/AdminCompanies";
import AdminVerification from "./components/AdminVerification";
import AdminDashboard from "./components/AdminDashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-add-announcement":
        title = "";
        metaDescription = "";
        break;
      case "/admin-profile":
        title = "";
        metaDescription = "";
        break;
      case "/admin-add-event":
        title = "";
        metaDescription = "";
        break;
      case "/admin-announcement":
        title = "";
        metaDescription = "";
        break;
      case "/admin-events":
        title = "";
        metaDescription = "";
        break;
      case "/admin-job-listing":
        title = "";
        metaDescription = "";
        break;
      case "/admin-pending-jobs":
        title = "";
        metaDescription = "";
        break;
      case "/admin-companies":
        title = "";
        metaDescription = "";
        break;
      case "/admin-verification":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AdminAddAlumni />} />
      <Route
        path="/admin-add-announcement"
        element={<AdminAddAnnouncement />}
      />
      <Route path="/admin-profile" element={<AdminProfile />} />
      <Route path="/admin-add-event" element={<AdminAddEvent />} />
      <Route path="/admin-announcement" element={<AdminAnnouncement />} />
      <Route path="/admin-events" element={<AdminEvents />} />
      <Route path="/admin-job-listing" element={<AdminJobListing />} />
      <Route path="/admin-pending-jobs" element={<AdminPendingJobs />} />
      <Route path="/admin-companies" element={<AdminCompanies />} />
      <Route path="/admin-verification" element={<AdminVerification />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
export default App;
