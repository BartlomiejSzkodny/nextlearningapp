import { getServerAuthSession } from "@/server/auth";
export default function Home() {
  const authSession = await getServerAuthSession()
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_256.gif"/>
      <div style={{padding:30}}>
        <h1>Welcome to MindWork</h1>
        <p>Application that will help you organise your work time.</p>
      </div>
    </div>
    );
}