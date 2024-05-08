import { Divider } from 'antd';

export default function Ternary() {
  const isAuthenticate = false;

  // if (isAuthenticate) {
  //   return (
  //     <div>
  //       <h1>welcome to the website</h1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>youre not a member</h1>
  //     </div>
  //   );
  // }

  return isAuthenticate ? (
    <div>
      <h1>youre welcomed to the site</h1>
    </div>
  ) : (
    <div>
      <h1>youre not yet logged in ,go log in</h1>
    </div>
  );
}
