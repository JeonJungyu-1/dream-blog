import Profile from "@/components/Profile";

interface aboutType {
  type: string;
  detail: string[];
}

const aboutData: aboutType[] = [
  {
    type: "Who am I?",
    detail: [
      "개발을 사랑하는 풀스택 개발자",
      "사람과 디자인을 담는 웹앱을 만들고 있음",
    ],
  },
  {
    type: "Career",
    detail: ["구글러(~Now)", "메이스북(~2019)", "삼준전자(~2015)"],
  },
  {
    type: "Skills",
    detail: [
      "React, Vue, Node",
      "Git, Clean Code",
      "VS Code, Intellij, MongoDB",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="flex justify-center">
        <Profile />
      </div>
      <div className="flex justify-center my-8">
        <div className="text-center bg-gray-700 w-4/5 py-3">
          {aboutData.map((el, index) => (
            <>
              <div key={index} className="text-2xl font-bold">
                {el.type}
              </div>
              {el.detail.map((elem, index) => (
                <div key={index}>{elem}</div>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
