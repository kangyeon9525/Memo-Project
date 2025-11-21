import { useState } from 'react';
import './App.css';
import MemoContainer from './component/MemoContainer';
import SideBar from './component/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1763700036091, // 시간 값
      updatedAt: 1763700068222, // 시간 값
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1763700136091, // 시간 값
      updatedAt: 1763700168222, // 시간 값
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
