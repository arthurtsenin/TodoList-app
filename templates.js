const createTemplate = ({ description, id, createdAt, isChecked }) => {
  const newDate = getTimeAndDate(createdAt);
  return `<div class="todo ${isChecked ? "checked" : ""}" id="${id}">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" ${isChecked ? "checked" : ""}>
              <label class="form-check-label">${description}</label>
            </div>
            <time class="ms-auto text-muted me-3">${newDate} </time>
            <button class="btn btn-sm btn-danger removeTodo">X</button>
				  </div>
			  `;
};

function getTimeAndDate(date) {
  if (typeof date == "string") {
    date = new Date(date);
  }

  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let year = date.getFullYear();
  return `${hours}:${minutes} ${day}.${month}.${year}`;
}

export { createTemplate, getTimeAndDate };
