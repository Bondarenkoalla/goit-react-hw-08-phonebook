
import Navigation from './Navigation';

export default function AppBar() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header >
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}