import ErrorState from './common/ErrorState';
import LoadingState from './common/LoadingState';

const UserProfilePresenter = ({ user, loading, error }) => {
  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  console.log(error);
  return (
    <div>
      UserProfilePresenter - responsible only for displaying the ui with help
      data provided from container component
      <h2>user data</h2>
      <p>username: {user.name} </p>
      <p>email: {user.email}</p>
    </div>
  );
};

export default UserProfilePresenter;
