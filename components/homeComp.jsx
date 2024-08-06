import Chat from "./chat";
import Sidebar from "./sidebar";
import Header from "./header";

const HomeComponent = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default HomeComponent;