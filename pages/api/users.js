const users = [{ name: "John", id: "A111111111", gender: "male" },{ name: "Mary", id: "A222222222", gender: "female" }];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ users , msg: "success" });
  } else if (req.method === "POST") {
    users.push(req.body);
    console.log(users);
    res.status(200).json({ msg: "success" });
  }

  
}
