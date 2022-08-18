type GreetProps = {
  name: string;
  messageCount?: number;
  isLogin: boolean;
};
export const Greet = (props: GreetProps) => {
  // Default messageCount
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLogin
          ? `Welcome ${props.name}, you have ${messageCount} unread messages`
          : `Welcome guest!`}
      </h2>
    </div>
  );
};
