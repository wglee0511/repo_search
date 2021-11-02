// 내가 클릭했던 Repo에 오브젝트를 저장
const setLocalStorage = (key, value) => {
  const key_list = JSON.parse(localStorage.getItem(key));
  if (key_list === null) {
    const firstArr = [value];
    localStorage.setItem(key, JSON.stringify(firstArr));
    return;
  }
  localStorage.setItem(key, JSON.stringify([...key_list, value]));
};
// 내가 클릭했던  보드, 아이디를 가져오기
const getLocalStorage = (key) => {
  const readList = JSON.parse(localStorage.getItem(key));
  if (readList === null) {
    return [];
  }
  return readList;
};

const deleteLocalStorage = (key, value) => {
  const totalArr = getLocalStorage(key);
  const deleteIndex = totalArr.findIndex((each) => each.id === value.id);
  if (deleteIndex !== -1) {
    totalArr.splice(deleteIndex, 1);
  }
  localStorage.setItem(key, JSON.stringify([...totalArr]));
};

export { setLocalStorage, getLocalStorage, deleteLocalStorage };
