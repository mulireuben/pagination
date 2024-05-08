export default function Switch() {
  const USER_STATUS = 'null';

  switch (USER_STATUS) {
    case 'NOT_VERIFIED':
      return (
        <div>
          <span>
            youre not verified,please verify your email or mobile number
          </span>
        </div>
      );
    case 'VERIFIED':
      return (
        <div>
          <span>youre verified click here to join the plartform</span>
        </div>
      );
    case 'ACCOUNT_DISABLED':
      return (
        <div>
          <span>your account is dissabled</span>
        </div>
      );
    default:
      return (
        <div>
          <span>please contact system admin</span>
        </div>
      );
  }
}
