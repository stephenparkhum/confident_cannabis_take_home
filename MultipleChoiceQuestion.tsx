import * as React from 'react'

/*
 * `MultipleChoiceQuestion` is a component which renders a textual question,
 * and answers to a question as a set of radio buttons, along with
 * a "submit" button. The component is meant to be used to represent
 * a multiple choice question as you would see within an online
 * quiz or exam. There's nothing too fancy about it!
 *
 * Please perform a code review of the `MultipleChoiceQuestion`
 * component.  
 *
 */

type MultipleChoiceQuestionProps = {
  question: string
  answers: Array<{ letter: string, text: string }>
  onSubmit: (letter: string) => void
}

export default function MultipleChoiceQuestion(props: MultipleChoiceQuestionProps) {
  const answers = props.answers
  let [letterChosen, setChosenLetter] = React.useState<string>()
  const onClickSubmit = React.useCallback(() => {
    props.onSubmit(letterChosen!)
  }, [])

  let renderAnswers = answers.map(a => {
    return <div>
      <input type="radio"
        id={a.letter}
        name="answer"
        value={a.letter}
        onChange={(e) => setChosenLetter(e.currentTarget.value)}
      />
      <label htmlFor={a.letter}>{a.letter}. {a.text}</label>
    </div>
  })

  return <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span><strong>{props.question}</strong></span>
    {renderAnswers}
    <button onClick={onClickSubmit}>Submit</button>
  </div>
}
