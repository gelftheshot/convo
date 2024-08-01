import Chat from "./chat";
import Sidebar from "./sidebar";

const HomeComponent = () => {
  return (
    <div className="grid h-screen grid-cols-[250px_1fr]">
        <Sidebar />
        <Chat />
    </div>
  );
};

export default HomeComponent;
