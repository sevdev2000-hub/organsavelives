export const sampleQuizQuestions = (count: number = 5) => {
    const shuffled = QuizQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, QuizQuestions.length));
};

export const QuizQuestions = [
    {
        question: "True or False: Your family can be charged for your organ donation.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. The donor's family is never charged for organ donation; costs related to saving the donor's life before donation are separate."
    },
    {
        question: "True or False: The rich and famous get priority for organ transplants.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Allocation is based on a strict system ensuring fairness; fame or wealth gives no advantage."
    },
    {
        question: "True or False: If I'm registered as a donor, doctors won't try to save my life in an emergency.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. The medical team's priority is to save your life. Organ donation is only considered after death determination."
    },
    {
        question: "True or False: There is no cost to the donor or their family for organ donation.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Families are not expected to pay anything to donate organs."
    },
    {
        question: "True or False: Only heart, lungs, and kidneys can be transplanted.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Organs like liver, pancreas, and small intestine, and tissues such as corneas, skin, bone, and heart valves are also transplantable."
    },
    {
        question: "True or False: Everybody can register as an organ donor even if you're old or sick.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Medical suitability is evaluated later; age or illness alone isn't an automatic disqualification."
    },
    {
        question: "True or False: Organ donation prevents having an open-casket funeral.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Organ recovery is performed with care and respect, and open-casket funerals are still possible with proper preparation."
    },
    {
        question: "True or False: There are enough donated organs to meet the demand.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. There is a shortage—more donors are needed to save lives."
    },
    {
        question: "True or False: If I register as a donor, family consent is legally required before donation can proceed.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Legally, registered donors have given first-person authorization that doesn't require family consent, though families are often consulted in practice."
    },
    {
        question: "True or False: If I register as an organ donor, my family will still be asked about donation.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Even when someone is registered, families are typically consulted as part of standard practice."
    },
    {
        question: "True or False: Patients ruled out for organ donation cannot be tissue donors.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Even if someone can't donate organs, they may still be able to donate tissue such as corneas, skin, bone, or heart valves."
    },
    {
        question: "True or False: One donor can help save or improve the lives of more than 50 people.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. A single donor can help many people through organ and tissue donation - potentially 75 or more people."
    },
    {
        question: "True or False: Your ethnicity helps determine if you're eligible to donate.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Eligibility is based on health factors, not ethnicity."
    },
    {
        question: "True or False: Doctors use extra tests to confirm death when you're a registered donor.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Additional tests are performed to ensure death is confirmed for registered donors to maintain the integrity of the donation process."
    },
    {
        question: "True or False: If everyone registered, fewer people would die waiting for a transplant.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. More registered donors means fewer people die while waiting."
    },
    {
        question: "True or False: Living donors usually go home within a day or two and return to normal activity in a couple weeks.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Most living kidney donors recover quickly and resume normal activity within weeks."
    },
    {
        question: "True or False: Being an organ donor affects the care I receive in the hospital.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. In emergency situations, doctors focus on saving your life, not organ status."
    },
    {
        question: "True or False: If a donor is listed on the registry, their family can legally override their decision.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Legal first-person authorization means registered donors' wishes should be honored, though families are often consulted in practice."
    },
    {
        question: "True or False: Organs can be donated after a person has died without any consent process.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Consent from the donor (if registered) or family is always required before donation."
    },
    {
        question: "True or False: Organ donation is only evaluated after death is verified by independent medical professionals.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Independent medical professionals verify death before organ donation is even considered."
    }
];