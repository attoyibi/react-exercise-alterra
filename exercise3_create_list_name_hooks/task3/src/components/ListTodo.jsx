export default function ListTodo({ users }) {
  console.log("didalam list todo", users);
  return (
    <div>
      {users.map((user) => (
        <h4
          style={
            user.complete
              ? {
                  border: "1px solid",
                  borderRadius: "20px",
                  margin: "40px",
                  padding: "10px",
                  width: "200px",
                }
              : {
                  border: "1px solid",
                  borderRadius: "20px",
                  margin: "40px",
                  padding: "10px",
                  width: "200px",
                  textDecorationLine: "line-through",
                }
          }
        >
          <span>{user.name}</span>
        </h4>
      ))}
    </div>
  );
}
