import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import Issues from "./pages/Issues";
import Main from "./pages/Main";
import Search from "./pages/Search";
import { NotificationContainer } from "react-notifications";
import Spinner from "./shared/Spinner";
import theme from "./styles/theme";
import "./styles/App.css";
import Grid from "./elements/Grid";
import { useEffect } from "react";
import { actionResetUpRepo } from "./redux/modules/repo";

function App() {
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionResetUpRepo());
  }, []);

  return (
    <Grid className="App" width={theme.size.mainWidth} margin="0 auto 0 auto">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          exact
          path="/search/repository/:word/:page_num"
          component={Search}
        />
        <Route exact path="/search/issues/:page_num" component={Issues} />
        <Redirect from="*" to="/" />
      </Switch>
      <NotificationContainer />
      {isLoading && <Spinner />}
    </Grid>
  );
}

export default App;
