import * as usersService from "../../utilities/users-service";

export default function ProfilePage() {
  async function handleCheckToken() {
    const expData = await usersService.checkToken();
    console.log(expData);
  }

  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
