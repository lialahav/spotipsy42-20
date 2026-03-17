import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import useStyles from './AppStyles';
import Header from './components/Header/header';
import Player from './components/Player/player';
import Sidebar from './components/Sidebar/sidebar';
import PageContent from './components/PageContent/pageContent';

const App: React.FC = () => {
  const { classes} = useStyles();


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <Header />

        <div className={classes.mainSection}>
          <PageContent/>
          <Sidebar />
        </div>

        <Player />
      </div>
    </ThemeProvider>
  )
}

export default App;
