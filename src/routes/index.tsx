import { Switch, Route } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import RequestAccess from "../pages/RequestAccess";

const Routes: React.FC = () => {
    return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/request-access" component={RequestAccess} />
            </Switch>
    );
}

export default Routes;