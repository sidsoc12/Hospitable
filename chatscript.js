const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't have an answer for that. You might want to try the internet.";
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      speech.text = "Hey, how can I help you?";
    }

    if (message.includes(' risk of developing ')) {
      speech.text = "While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes) appear to develop serious illness more often than others.";
    }

    if (message.includes(' should not do')) {
      speech.text = "The following measures ARE NOT effective against COVID-2019 and can be harmful:SmokingWearing multiple masksTaking antibiotics. In any case, if you have fever, cough and difficulty breathing seek medical care early to reduce the risk of developing a more severe infection and be sure to share your recent travel history with your health care provider.";
    }

    if (message.includes(' covid-19 spread')) {
      speech.text = "People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick. WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share updated findings. Can the virus that causes COVID-19 be transmitted through the air?Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air. See previous answer on “How does COVID-19 spread?”Can CoVID-19 be caught from a person who has no symptoms?The main way the disease spreads is through respiratory droplets expelled by someone who is coughing. The risk of catching COVID-19 from someone with no symptoms at all is very low. However, many people with COVID-19 experience only mild symptoms. This is particularly true at the early stages of the disease. It is therefore possible to catch COVID-19 from someone who has, for example, just a mild cough and does not feel ill. WHO is assessing ongoing research on the period of transmission of COVID-19 and will continue to share updated findings. Can I catch COVID-19 from the feces of someone with the disease?The risk of catching COVID-19 from the feces of an infected person appears to be low. While initial investigations suggest the virus may be present in feces in some cases, spread through this route is not a main feature of the outbreak. WHO is assessing ongoing research on the ways COVID-19 is spread and will continue to share new findings. Because this is a risk, however, it is another reason to clean hands regularly, after using the bathroom and before eating.";
    }

    if (message.includes(' covid-19 the same as SARS')) {
      speech.text = "No. The virus that causes COVID-19 and the one that caused the outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically, but the diseases they cause are quite different. SARS was more deadly but much less infectious than COVID-19. There have been no outbreaks of SARS anywhere in the world since 2003.";
    }

    if (message.includes('what is covid-19')) {
      speech.text = "COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.";
    }

    if (message.includes('airborne') || message.includes('Airborne')) {
      speech.text = "The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands.";
    }

    if (message.includes(' survive on surfaces')) {
      speech.text = "It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other coronaviruses. Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days. This may vary under different conditions (e.g. type of surface, temperature or humidity of the environment).If you think a surface may be infected, clean it with simple disinfectant to kill the virus and protect yourself and others. Clean your hands with an alcohol-based hand rub or wash them with soap and water. Avoid touching your eyes, mouth, or nose.";
    }

    if (message.includes('are there any medicines or therapies that can prevent or cure covid-19')) {
      speech.text = "While some western, traditional or home remedies may provide comfort and alleviate symptoms of COVID-19, there is no evidence that current medicine can prevent or cure the disease. WHO does not recommend self-medication with any medicines, including antibiotics, as a prevention or cure for COVID-19. However, there are several ongoing clinical trials that include both western and traditional medicines. WHO will continue to provide updated information as soon as clinical findings are available.";
    }

    if (message.includes('how did the first human ')) {
      speech.text = "The first human cases of COVID-19 were identified in Wuhan City, China in December 2019. At this stage, it is not possible to determine precisely how humans in China were initially infected with SARS-CoV-2.However, SARS-CoV, the virus which caused the SARS outbreak in 2003, jumped from an animal reservoir (civet cats, a farmed wild animal) to humans and then spread between humans. In a similar way, it is thought that SARS-CoV-2 jumped the species barrier and initially infected humans, but more likely through an intermediate host, that is another animal species more likely to be handled by humans - this could be a domestic animal, a wild animal, or a domesticated wild animal and, as of yet, has not been identified.Until the source of this virus is identified and controlled, there is a risk of reintroduction of the virus in the human population and the risk of new outbreaks like the ones we are currently experiencing";
    }

    if (message.includes(' to catch covid-19')) {
      speech.text = "The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding there. For most people in most locations the risk of catching COVID-19 is still low. However, there are now places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19.COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation where you are or intend to go. WHO publishes daily updates on the COVID-19 situation worldwide. You can see these at https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/";
    }

    if (message.includes(' source of the coronavirus ') || message.includes(' source of the COVID-19 ')) {
      speech.text = "Currently, the source of SARS-CoV-2, the coronavirus (CoV) causing COVID-19 is unknown. All available evidence suggests that SARS-CoV-2 has a natural animal origin and is not a constructed virus. SARS-CoV-2 virus most probably has its ecological reservoir in bats. SARS-CoV-2, belongs to a group of genetically related viruses, which also include SARS-CoV and a number of other CoVs isolated from bats populations. MERS-CoV also belongs to this group, but is less closely related.";
    }

    if (message.includes(' antibiotics effective in preventing or treating ')) {
      speech.text = "No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection.";
    }

    if (message.includes('what is a coronavirus') || message.includes('what is a Coronavirus')) {
      speech.text = "Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.";
    }

    if (message.includes('can I catch covid-19 from my pet')) {
      speech.text = "We are aware of instances of animals and pets of COVID-19 patients being infected with the disease;As the intergovernmental body responsible for improving animal health worldwide, the World Organisation for Animal Health (OIE) has been developing technical guidance on specialised topics related to animal health, dedicated to veterinary services and technical experts (including on testing and quarantine);There is a possibility for some animals to become infected through close contact with infected humans. Further evidence is needed to understand if animals and pets can spread the disease;Based on current evidence, human to human transmission remains the main driver;It is still too early to say whether cats could be the intermediate host in the transmission of the COVID-19."
    }

    if (message.includes(' vaccine for covid-19') || message.includes(' treatment for covid-19')) {
      speech.text = "Not yet. To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019. However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care. Possible vaccines and some specific drug treatments are under investigation. They are being tested through clinical trials. WHO is coordinating efforts to develop vaccines and medicines to prevent and treat COVID-19. The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue, and maintain a distance of at least 1 meter (3 feet) from people who are coughing or sneezing. (See Basic protective measures against the new coronavirus)."
    }

    if (message.includes(' incubation period for covid-19')) {
      speech.text = "The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available."
    }

    if (message.includes(' the symptoms of covid-19')) {
      speech.text = "The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."
    }

    if (message.includes('is it safe to receive a package ')) {
      speech.text = "Yes. The likelihood of an infected person contaminating commercial goods is low and the risk of catching the virus that causes COVID-19 from a package that has been moved, travelled, and exposed to different conditions and temperature is also low."
    }

    if (message.includes('should I worry ')) {
      speech.text = "Illness due to COVID-19 infection is generally mild, especially for children and young adults. However, it can cause serious illness: about 1 in every 5 people who catch it need hospital care. It is therefore quite normal for people to worry about how the COVID-19 outbreak will affect them and their loved ones. We can channel our concerns into actions to protect ourselves, our loved ones and our communities. First and foremost among these actions is regular and thorough hand-washing and good respiratory hygiene. Secondly, keep informed and follow the advice of the local health authorities including any restrictions put in place on travel, movement and gatherings. Learn more about how to protect yourself at https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
    }

    if (message.includes(' use a mask')) {
      speech.text = "Remember, a mask should only be used by health workers, care takers, and individuals with respiratory symptoms, such as fever and cough.Before touching the mask, clean hands with an alcohol-based hand rub or soap and waterTake the mask and inspect it for tears or holes.Orient which side is the top side (where the metal strip is).Ensure the proper side of the mask faces outwards (the coloured side).Place the mask to your face. Pinch the metal strip or stiff edge of the mask so it moulds to the shape of your nose.Pull down the mask’s bottom so it covers your mouth and your chin.After use, take off the mask; remove the elastic loops from behind the ears while keeping the mask away from your face and clothes, to avoid touching potentially contaminated surfaces of the mask. Discard the mask in a closed bin immediately after use.Perform hand hygiene after touching or discarding the mask – Use alcohol-based hand rub or, if visibly soiled, wash your hands with soap and water."
    }

    if (message.includes(' protect myself ') || message.includes(' protect myself') || message.includes(' prevent the spread of the disease')) {
      speech.text = "Protection measures for everyoneStay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest news.You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.Avoid touching eyes, nose and mouth.Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places – especially if you are an older person or have diabetes, heart or lung disease.Why? You have a higher chance of catching COVID-19 in one of these areas. Protection measures for persons who are in or have recently visited (past 14 days) areas where COVID-19 is spreadingFollow the guidance outlined above (Protection measures for everyone) Self-isolate by staying at home if you begin to feel unwell, even with mild symptoms such as headache, low grade fever (37.3 C or above) and slight runny nose, until you recover. If it is essential for you to have someone bring you supplies or to go out, e.g. to buy food, then wear a mask to avoid infecting other people.Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers.Why? Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses."
    }

    if (message.includes(' do to protect myself ') || message.includes(' do to protect myself') || message.includes(' do to prevent the spread of the disease')) {
      speech.text = "Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. Disposable face mask can only be used once. If you are not ill or looking after someone who is ill then you are wasting a mask. There is a world-wide shortage of masks, so WHO urges people to use masks wisely.WHO advises rational use of medical masks to avoid unnecessary wastage of precious resources and mis-use of masks (see Advice on the use of masks). The most effective ways to protect yourself and others against COVID-19 are to frequently clean your hands, cover your cough with the bend of elbow or tissue and maintain a distance of at least 1 meter (3 feet) from people who are coughing or sneezing. See basic protective measures against the new coronavirus for more information."
    }

    if (message.includes(' become infected with the covid-19 from an animal ') || message.includes(' become infected with the covid-19 from an animal') || message.includes(' become infected with covid-19 from an animal')) {
      speech.text = "Coronaviruses are a large family of viruses that are common in animals. Occasionally, people get infected with these viruses which may then spread to other people. For example, SARS-CoV was associated with civet cats and MERS-CoV is transmitted by dromedary camels. Possible animal sources of COVID-19 have not yet been confirmed. To protect yourself, such as when visiting live animal markets, avoid direct contact with animals and surfaces in contact with animals. Ensure good food safety practices at all times. Handle raw meat, milk or animal organs with care to avoid contamination of uncooked foods and avoid consuming raw or undercooked animal products."
    }

    if (message.includes('can I step out to withdraw money ') || message.includes('can I step out to withdraw money')) {
      speech.text = "Yes, one can step out to withdraw money individually."
    }

    if (message.includes(' safe to use the lift') || message.includes(' safe to use the lift ')) {
      speech.text = "Yes. You have to ensure that you maintain proper hand hygeine and respiratory hygiene. You can even try disposable gloves and face mask to protect yourself from catching the infection through the lift buttons."
    }

    if (message.includes(' leave my city') || message.includes(' leave my state')) {
      speech.text = "Several states have sealed their borders and only essential services and emergency cases are being allowed to cross. Travel only if you must."
    }

    if (message.includes(' penalized if I break the lockdown') || message.includes(' penalized if I break the lock down')) {
      speech.text = "All lockdown advisories should be followed with utmost seriousness. The police can take punitive action against you if they feel your actions are endangering the lives or disrupting the law."
    }

    if (message.includes('can I go out')) {
      speech.text = "Avoid. A person should venture out of his home only for essential needs. People should also avoid public transport as much as possible."
    }

    if (message.includes('will I be able to withdraw money')) {
      speech.text = "Yes. Cashier and teller operations of banks, including ATMs, falls under the essential category list."
    }

    if (message.includes(' needs to visit a pharmacy for medicines') || message.includes(' need to visit a pharmacy for medicines')) {
      speech.text = "All pharmacies across the countries are categorised under the essential list and will continue to function as per their normal working hours."
    }

    if (message.includes(' hospitals remain open')) {
      speech.text = "Yes. Hospitals will operate normally."
    }

    if (message.includes(' local grocery stores be open') || message.includes(' local grocery stores operate')) {
      speech.text = "Yes. All stores selling food items, groceries — fruits, vegetables, milk, bakery items, meat, fish etc — will continue to remain open."
    }

    if (message.includes(' travel from one city to another in personal cars') || message.includes(' travel from one city to another in cars')) {
      speech.text = "No, most cities are under a lockdown"
    }

    if (message.includes(' isolation help 100% prevention ') || message.includes(' isolation fully help prevention ')) {
      speech.text = "Yes. If you and your family have not been exposed to the virus, isolation will keep you protected. And if you have been exposed and recommended self-quarantine, make sure you follow that dutifully to keep other safe."
    }

    if (message.includes(' need stock essential items')) {
      speech.text = "No. You don't need to have stock essential items. There is enough stock available in the market and hoarding it won't be useful."
    }

    if (message.includes('how safe is it to visit a hospital')) {
      speech.text = "It is not completely safe to visit a hospital, more so if you are above the age of 60 or suffering from comorbidities. However, if you have to visit the hospital for screening, dialysis etc, inform your healthcare official beforehand and make sure you wear a mask and maintain safe distance from others."
    }

    if (message.includes('what is a novel coronavirus') || message.includes('what is a novel Coronavirus')) {
      speech.text = "A novel coronavirus (CoV) is a new strain of coronavirus. The disease caused by the novel coronavirus first identified in Wuhan, China, has been named coronavirus disease 2019 (COVID-19) – CO stands for corona, VI for virus, and D for disease."
    }

    if (message.includes('how does the virus spread') || message.includes('how does the coronavirus spread') || message.includes('how does the coronavirus spread') || message.includes('how does the covid-19 virus spread')) {
      speech.text = "The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing), and touching surfaces contaminated with the virus. The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it."
    }

    if (message.includes(' symptoms of the coronavirus') || message.includes(' symptoms of coronavirus') || message.includes(' symptoms of COVID-19') || message.includes('symptoms of the virus')) {
      speech.text = "Symptoms can include fever, cough and shortness of breath. In more severe cases, infection can cause pneumonia or breathing difficulties. More rarely, the disease can be fatal. These symptoms are similar to the flu (influenza) or the common cold, which are a lot more common than COVID-19. This is why testing is required to confirm if someone has COVID-19. It’s important to remember that key prevention measures are the same – frequent hand washing, and respiratory hygiene (cover your cough or sneeze with a flexed elbow or tissue, then throw away the tissue into a closed bin)."
    }

    if (message.includes(' covid-19 affect children') || message.includes(' coronavirus affect children') || message.includes(' coronavirus affect my kids') || message.includes(' virus affect my kids')) {
      speech.text = "This is a new virus and we do not know enough yet about how it affects children or pregnant women. We know it is possible for people of any age to be infected with the virus, but so far there have been relatively few cases of COVID-19 reported among children. The virus is fatal in rare cases, so far mainly among older people with pre-existing medical conditions."
    }

    if (message.includes(' child has symptoms of covid-19') || message.includes(' child has symptoms of the coronavirus') || message.includes(' kid has symptoms of the coronavirus') || message.includes(' kid has symptoms of covid-19')) {
      speech.text = "Seek medical attention, but remember that it’s flu season in the Northern Hemisphere, and symptoms of COVID-19 such as cough or fever can be similar to those of the flu, or the common cold – which are a lot more frequent.Continue to follow good hand and respiratory hygiene practices like regular handwashing, and keep your child up to date with vaccinations – so that your child is protected against other viruses and bacteria causing diseases. As with other respiratory infections like the flu, seek care early if you or your child are having symptoms, and try to avoid going to public places (workplace, schools, public transport), to prevent spread to others."
    }

    if (message.includes(' family member has symptoms') || message.includes(' family member displays symptoms') || message.includes(' family member has symptoms ') || message.includes(' family member displays symptoms ')) {
      speech.text = "You should seek medical care early if you or your child has a fever, cough or difficulty breathing. Consider calling ahead to tell your health care provider if you have traveled to an area where COVID-19 has been reported, or if you have been in close contact with someone with who has traveled from one of these areas and has respiratory symptoms."
    }

    if (message.includes(' wash hands properly') || message.includes('how do I wash hands') || message.includes(' wash hands correctly')) {
      speech.text = "Step 1:Wet hands with running water Step 2: Apply enough soap to cover wet hands Step 3: Scrub all surfaces of the hands – including back of hands, between fingers and under nails – for at least 20 seconds Step 4: Rinse thoroughly with running water Step 5: Dry hands with a clean cloth or single-use towel Wash your hands often, especially before eating; after blowing your nose, coughing, or sneezing; and going to the bathroom. If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol. Always wash hands with soap and water, if hands are visibly dirty."
    }

    if (message.includes(' pregnant woman pass coronavirus to unborn children') || message.includes(' pregnant woman pass the coronavirus to unborn children') || message.includes(' pregnant woman pass covid-19 to unborn children')) {
      speech.text = "At this time, there is not enough evidence to determine whether the virus is transmitted from a mother to her baby during pregnancy, or the potential impact this may have on the baby. This is currently being investigated. Pregnant women should continue to follow appropriate precautions to protect themselves from exposure to the virus, and seek medical care early, if experiencing symptoms, such as fever, cough or difficulty breathing. Is it safe for a mother to breastfeed if she is infected with coronavirus? All mothers in affected and at-risk areas who have symptoms of fever, cough or difficulty breathing, should seek medical care early, and follow instructions from a health care provider. Considering the benefits of breastfeeding and the insignificant role of breastmilk in the transmission of other respiratory viruses, the mother can continue breastfeeding, while applying all the necessary precautions. For symptomatic mothers well enough to breastfeed, this includes wearing a mask when near a child (including during feeding), washing hands before and after contact with the child (including feeding), and cleaning/disinfecting contaminated surfaces – as should be done in all cases where anyone with confirmed or suspected COVID-19 interacts with others, including children. If a mother is too ill, she should be encouraged to express milk and give it to the child via a clean cup and/or spoon – all while following the same infection prevention methods."
    }

    if (message.includes('what is the risk of my child becoming sick with covid-19') || message.includes('what is the risk of my child becoming sick with the coronavirus') || message.includes('what is the risk of my child becoming sick with the virus')) {
      speech.text = "Based on available evidence, children do not appear to be at higher risk for COVID-19 than adults. While some children and infants have been sick with COVID-19, adults make up most of the known cases to date. You can learn more about who is most at risk for health problems if they have COVID-19 infection on CDC’s current Risk Assessment page."
    }

    if (message.includes(' when should we identify ourselves as being sick and stay at home') || message.includes(' when should we identify ourselves as being sick')) {
      speech.text = "Although a fever is a sure sign that you are sick enough not to come to work, anyone experiencing respiratory symptoms like coughing and sneezing should stay at home."
    }

    if (message.includes(' be infected again') || message.includes(' be reinfected')) {
      speech.text = "We know that for similar coronaviruses, infected people are unlikely to be re-infected shortly after they recover. However, because the immune response to COVID-19 is not yet understood, it is not yet known whether similar immune protection will be observed for patients who have recovered from COVID-19."
    }

    if (message.includes(' covid-19 or just the common flu') || message.includes(' covid-19 or the common flu') || message.includes(' coronavirus or just the common flu') || message.includes(' coronavirus or the common flu?')) {
      speech.text = "We know that for similar coronaviruses, infected people are unlikely to be re-infected shortly after they recover. However, because the immune response to COVID-19 is not yet understood, it is not yet known whether similar immune protection will be observed for patients who have recovered from COVID-19."
    }

    if (message.includes(' transmitted through air')) {
      speech.text = "Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air"
    }

    if (message.includes('who is at risk of developing a severe illness') || message.includes('who is at risk of developing a serious illness')) {
      speech.text = "While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes) appear to develop serious illness more often than others."
    }

    if (message.includes(' connection between covid-19 and temperature') || message.includes(' connection between covid-19 and environment temperature')) {
      speech.text = "It is not known yet if weather and temperature changes impact or has any connection with COVID-19. At this time, it is not clear or known if the spread of COVID-19 will decrease when the weather becomes warmer."
    }

    if (message.includes(' with heart disease at increased risk to get the coronavirus') || message.includes(' with diabetes at increased risk to get the coronavirus') || message.includes(' with hypertension at increased risk to get the coronavirus')) {
      speech.text = "No, people with hypertension, diabetes or heart diseases are at no greater risk of getting the infection than anyone else."
    }

    if (message.includes('what about reports about bp medications increasing severity of covid-19') || message.includes('what about reports about bp medications increasing severity of the coronavirus')) {
      speech.text = "After review of the available information the consensus of various scientific societies and expert group of cardiologists is that currently there is no evidence that the two group of drugs- ACE inhibitors (For instance, Ramipril, Enalapril and so on) and angiotensin receptor blockers (ARBs) (Namely, Losartan, Telmisartan and so on) increase the susceptibility or severity of COVID-19. These drugs are very effective for heart failure by supporting your heart function, and controlling high blood pressure. It may be harmful to stop these medications by yourself. This can worsen your heart condition."
    }

    if (message.includes('painkillers affect')) {
      speech.text = "Some type of painkillers like Ibuprofen is found to worsen the COVID-19. Such drugs are known to be harmful to heart failure patients and may increase your risk of kidney damage. Avoid NSAIDs or take them only when prescribed by your doctor. Paracetamol is one of the safest pain killers to use if needed."
    }

    if (message.includes('sipping hot water') || message.includes('drinking hot water') || message.includes('drinking alcohol')) {
      speech.text = "Neither sipping hot water nor consumption of alcohol will kill the virus. Alcohol-based sanitisers kill the virus on your hands but once in your throat, the virus infects the cells and alcohol cannot help there."
    }

    if (message.includes('should I use a hand sanitizer')) {
      speech.text = "A hand-sanitiser is likely to be effective only if it contains more than 60% alcohol. However, if you have access to soap and running water, go for that instead. Soap is far more effective than hand-sanitisers because its chemical properties allow it to rapidly destroy viruses on your skin."
    }

    if (message.includes(' can I do to keep myself and others around me safe') || message.includes(' can I keep myself and others around me safe')) {
      speech.text = "Clean and disinfect high-touch surfaces in your house. Wash your hands with soap and water for 20 seconds, especially after blowing your nose, coughing or sneezing; after using the restroom; before eating or preparing food; after contact with animals or pets; and before and after providing routine care for another person who needs assistance. Cover your mouth and nose with a tissue when you cough or sneeze. Throw used tissues in a lined trash can. Avoid touching your eyes, nose, and mouth with unwashed hands. You should not share dishes, drinking glasses, cups, eating utensils, towels, or bedding with other people or pets in your home. Clean any surfaces that may have blood, stool, or body fluids on them"
    }

    if (message.includes(' medical insurance policies cover covid-19') || message.includes(' medical insurance policies cover the coronavirus')) {
      speech.text = "Yes. The Insurance Regulatory and Development Authority of India instructed all insurers via a notice on March 4, 2020, to cover all claims pertaining to hospitalisation due to coronavirus and medical expenses incurred due to treatment of coronavirus."
    }

    if (message.includes(' happens if I test positive ') || message.includes(' happens if I test positive')) {
      speech.text = "If you test positive, you will be hospitalised until doctors can ascertain you no longer have COVID-19."
    }

    if (message.includes(' covid-19 test free') || message.includes(' test free') || message.includes(' coronavirus test free')) {
      speech.text = "Yes. All COVID-19 tests being conducted at government laboratories are free of cost."
    }

    if (message.includes(' flatten the curve mean')) {
      speech.text = "Say it’s a cold winter day and you’re inside a room with an object that emits heat. There are two settings on the object: to release all the heat in a short period of time, i.e. in a burst, or to continuously release a smaller amount of heat over a longer period of time. Which one will you pick? The second setting is the wiser option – and it’s the same with an infectious disease outbreak. It’s better to have the new coronavirus spread such that the number of people being hospitalised is a steady stream spread out over a longer period than a burst of a large number of people hospitalised over a shorter period. This preference is called ‘flattening the curve’. The ‘curve’ stands for the plot of the number of people requiring hospitalisation versus time. If the burst scenario plays out, for example because a local population didn’t maintain proper infection control practices, the number of people requiring hospitalisation at any given time is likely to exceed the available capacity, placing more people’s lives at risk."
    }

    if (message.includes(' natural or bioengineered')) {
      speech.text = "It is extremely unlikely that the virus was bio-engineered or synthesised, and extremely likely to be of natural origin. It is a zoonotic virus, which means it spread from non-humans to humans. Perhaps the most famous zoonotic disease among humans is AIDS, caused by the human immunodeficiency virus that ‘jumped’ from primates in Africa to humans in the first half of the 20th century."
    }

    if (message.includes(' new coronavirus and other coronaviruses') || message.includes(' new coronavirus and other coronavirus has') || message.includes(' new oronavirus and other Coronaviruses') || message.includes(' new coronavirus and other Coronavirus has') || message.includes(' new Coronavirus and other coronaviruses') || message.includes(' new Coronavirus and other coronavirus has')) {
      speech.text = "There are many different kinds of coronavirus. Some only affect animals. Some have been circulating among human beings for years, causing mild colds. Others have caused small, severe human disease outbreaks in the past, such as the coronaviruses that caused SARS in 2003 and MERS in 2012. The new coronavirus is different from these, and was only identified in December 2019."
    }

    if (message.includes('why is it called a coronavirus') || message.includes('why is it called a Coronavirus')) {
      speech.text = "Corona means “crown,” and coronaviruses have a “crown” of protruding points on their surface that give them a characteristic appearance when seen under a microscope. Coronaviruses are a whole family of viruses; there are many."
    }

    if (message.includes(' coronavirus live in heat') || message.includes('can covid-19 live in heat')) {
      speech.text = "Several countries currently affected by the new coronavirus outbreak are experiencing summer weather. Some viral illnesses, like the flu, seem to be less common in warmer months, but it is still possible to catch them during that time. Investigations are exploring the effects of temperature and weather on the spread of this new coronavirus."
    }

    if (message.includes('is there a way to treat a coronavirus infection')) {
      speech.text = "There is no one thing you can do – like take a vaccine shot – to get rid of a COVID-19 infection if you already have it. This is why prevention is very important."
    }

    if (message.includes(' catch the new coronavirus from my pet') || message.includes(' catch the new coronavirus from a pet') || message.includes(' catch the new coronavirus from my dog') || message.includes(' catch the new coronavirus from a dog') || message.includes(' catch the new coronavirus from my cat') || message.includes(' catch the new coronavirus from a cat')) {
      speech.text = "There is no evidence that companion animals, like dogs and cats, can spread the new coronavirus to people. Jason Villano, D.V.M., M.S., M.Sc., a veterinary expert at Johns Hopkins, says, “The recent reports of a dog in Hong Kong testing positive for a ‘low level of infection’ of the new coronavirus does not mean that the dog actually was infected with the virus or can transmit it. The test used can detect even small amount of viral particles, and that further testing needs to be performed to confirm infection.” Likewise, there have not been any reports of companion animals becoming sick with COVID-19. Because this is a new virus, experts recommend good hygiene when handling or caring for your pets. Wash your hands before and after interacting with animals, and avoid kissing them or letting them lick you or share your food. People ill with COVID-19 should let someone else take care of their animals. If this isn’t possible, patients should wear a mask while looking after their pet."
    }

    if (message.includes(' workers at risk from a novel coronavirus') || message.includes(' workers at risk from a novel Coronavirus')) {
      speech.text = "Yes, they can be, as health care workers come into contact with patients more often than the general public WHO recommends that health care workers consistently apply appropriate."
    }

    if (message.includes(' vaccine for a novel coronavirus') || message.includes(' vaccine for a novel Coronavirus') || message.includes(' vaccine for the novel coronavirus') || message.includes(' vaccine for the novel Coronavirus')) {
      speech.text = "When a disease is new, there is no vaccine until one is developed. It can take a number of years for a new vaccine to be developed."
    }

    if (message.includes(' hand sanitizers better than soap')) {
      speech.text = " If you can use soap with water, it is a better thing. One uses soap more thoroughly and it helps clear the virus in between the fingers and under the nails. If you do not have soap, use hand sanitiser but clean your hands thoroughly and regularly."
    }



    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});
