import { useRecoilValue } from "recoil";
import todoListStatsState from "../states/todoListStatsState";

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total 항목 수: {totalNum}</li>
      <li>완료 항목 수: {totalCompletedNum}</li>
      <li>완료되지 않은 항목 수: {totalUncompletedNum}</li>
      <li>완료 비율: {formattedPercentCompleted}%</li>
    </ul>
  );
}

export default TodoListStats;
