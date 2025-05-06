import ReactQueryProvider from 'providers/ReactQueryProvider';
import ThemeProvider from 'providers/ThemeProvider';
import GlobalProvider from 'providers/GlobalProvider';
import AnalyticsProvider from 'providers/AnalyticsProvider';
import Recoil from 'components/config/Recoil';
import StyledComponentsRegistry from 'lib/registry';

export default function ContextProvider({ children }) {
    return(
        <ReactQueryProvider> 
            <Recoil>
                <StyledComponentsRegistry>
                    <ThemeProvider>
                        <AnalyticsProvider/>
                        <GlobalProvider/>
                        {children}
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </Recoil>
        </ReactQueryProvider>
    )
};