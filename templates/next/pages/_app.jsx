import { any } from 'prop-types';
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
	Component: any,
	pageProps: any,
};
