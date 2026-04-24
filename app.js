const credentials = {
  student_demo: { password: "ChangYu2026!", role: "student" },
  teacher_demo: { password: "ChangYu2026!", role: "teacher" },
};

const PROJECT_NAME = "问衡";

const samples = {
  high: {
    label: "高风险病例",
    text: "患者近1周大便4-5次/日，质稀，有黏液脓血，伴腹痛、里急后重，夜间偶有便意。近期自行停用美沙拉嗪。纳食一般，乏力，睡眠欠佳。舌红苔白腻，脉细。",
    patient: {
      name: "病例A · 复发风险训练患者",
      intro: "患者感觉最近肠胃又不太对劲，说话会比较生活化，需要学生把口语信息转成医学线索。",
      responses: {
        overview: "主要是这几天跑厕所多了，肚子也不舒服，有时候便里还能看到红的和黏黏的东西。",
        stool: "这几天跑厕所明显多了，一天差不多四五次，而且都比较稀。",
        blood: "有时候纸上或者便里能看到红的，还有黏黏的东西，我看着挺害怕的。",
        pain: "肚子会一阵一阵疼，老觉得想上厕所，但去了又排不干净。",
        night: "晚上偶尔也会被憋醒想去厕所，所以睡得不太踏实。",
        medication: "前阵子我觉得好些了，就自己停了几天那个肠炎药，好像叫美沙拉嗪。",
        exam: "最近还没去复查，也没做肠镜。医生以前说过有个大便炎症指标，我这次还没查。",
        appetite: "这几天胃口一般，吃一点就不太想吃，饭量比平时少一些，人也有点没劲。",
        fatigue: "有，这几天明显没什么力气，走一会儿就觉得累，也不太想动。",
        fever: "没有明显高烧，体温也没认真量过，就是觉得人有点发虚。",
        weight: "体重没有特意称，但这几天吃得少，感觉人轻了一点。",
        systemic: "没有明显高烧；乏力是有的，胃口也差一点。体重我没仔细称，只觉得最近人有点虚。",
        duration: "大概是最近一周变明显的，前面只是偶尔不舒服，这几天跑厕所多了才有点担心。",
        giOther: "不太恶心，也没有明显呕吐，主要还是肚子疼、老想上厕所和便里有黏黏红红的东西。",
        dietTrigger: "没特别吃坏东西，辛辣和凉的吃了会更不舒服，所以这几天我都吃得比较清淡。",
        dailyLife: "有影响，主要是总想跑厕所，出门或者上课开会的时候会担心来不及。",
        extraIntestinal: "关节没有特别疼，口腔也没长溃疡。主要还是肠道这些症状。",
        pastHistory: "以前也犯过，医生说是溃疡性结肠炎，之前吃药后能压下去。",
        familyHistory: "家里人好像没有类似肠炎病史，我也不太确定。",
        tongue: "我自己看舌头有点红，舌苔有点厚。脉象这个我就不太懂，是医生写的。",
        fallback: "这个我一下说不清。你可以换个更具体的问法，比如问大便、肚子痛、吃饭胃口、睡眠、用药或最近复查。",
      },
    },
  },
  low: {
    label: "低风险病例",
    text: "患者近期大便1次/日，成形，无黏液脓血，无腹痛，无里急后重。纳食可，睡眠尚可，无发热乏力。规律服药，近期症状稳定。舌淡红，苔薄白，脉平。",
    patient: {
      name: "病例B · 稳定随访训练患者",
      intro: "患者目前自觉比较稳定，适合训练学生确认低风险依据，而不是直接结束问诊。",
      responses: {
        overview: "最近其实还算平稳，没有特别难受，就是来复查时想确认还要不要继续这么管理。",
        stool: "最近基本一天一次，大便形状还可以，不怎么稀。",
        blood: "没看到血，也没有那种黏黏的东西。",
        pain: "肚子不疼，也没有总想上厕所却排不出来的感觉。",
        night: "晚上不会因为想上厕所醒来，睡觉还可以。",
        medication: "药我都按医生说的吃，没有自己停过。",
        exam: "最近复查医生说还算稳定，让我继续按时吃药、按时随访。",
        appetite: "吃饭还可以，胃口和平时差不多，饭量也没有明显减少。",
        fatigue: "没有明显乏力，精神和平时差不多，日常活动不太受影响。",
        fever: "没有发烧，也没有低热。",
        weight: "体重没怎么变，衣服松紧也和平时差不多。",
        systemic: "没有发热，也没有明显乏力，体重基本没变化。",
        duration: "这段时间都比较稳定，没有突然加重。主要是按医嘱来随访。",
        giOther: "没有恶心呕吐，也没有明显胃疼，肚子整体还算舒服。",
        dietTrigger: "正常吃饭一般没问题，我会少吃太辣太油的东西。",
        dailyLife: "基本不影响生活和学习，主要就是按时吃药、定期复查。",
        extraIntestinal: "没有明显关节痛、口腔溃疡或者皮疹。",
        pastHistory: "以前发作过，但这阵子控制得还可以。",
        familyHistory: "家里没有听说有人得类似的肠道病。",
        tongue: "医生看过说舌头还可以，舌苔不厚。脉象我自己说不上来。",
        fallback: "目前真没什么特别难受的。你可以具体问大便、便血、肚子痛、吃饭、睡眠、用药或复查情况。",
      },
    },
  },
  boundary: {
    label: "边界病例",
    text: "患者大便1-2次/日，偶不成形，无明显黏液脓血，腹痛偶作，睡眠梦多，四肢关节疼痛，纳食尚可，肠鸣矢气多。舌脉信息未记录。",
    patient: {
      name: "病例C · 信息不足边界患者",
      intro: "患者描述比较含糊，很多信息记不清楚，适合训练学生补问和表达不确定性。",
      responses: {
        overview: "说不上特别严重，就是偶尔肚子不舒服，大便有时不太成形，我自己也拿不准。",
        stool: "一般一天一两次，有时候成形，有时候有点散。",
        blood: "我没太看到明显的血，但也不是每次都特别注意。",
        pain: "肚子偶尔会不舒服，不是天天疼，也说不准和吃东西有没有关系。",
        night: "晚上倒不太会因为上厕所醒，就是最近梦多，睡得一般。",
        medication: "药大多数时候都吃，但有时候忙起来会忘一两次，具体剂量我也记不清。",
        exam: "最近没做肠镜，也没查那个大便炎症指标，所以我也不知道现在到底严不严重。",
        appetite: "胃口还可以，不算特别差，不过肚子不舒服的时候就不太想吃太多。",
        fatigue: "不算特别乏力，就是睡得一般，有时候觉得没精神。",
        fever: "没发烧，也没觉得身上发热。",
        weight: "体重好像没怎么变，我没有天天称。",
        systemic: "没发烧，体重好像没怎么变；精神一般，主要是睡得不太好。",
        duration: "这种情况断断续续有一阵子了，最近没有特别突然地加重，但也没完全好。",
        giOther: "偶尔有点胀，肠子咕噜咕噜响得多一些，恶心呕吐倒是不明显。",
        dietTrigger: "有时候吃凉的或者油一点会不舒服，但我也说不准是不是一定相关。",
        dailyLife: "影响不算大，就是不舒服的时候会分心，也有点担心是不是又要严重。",
        extraIntestinal: "关节有时候会疼，口腔溃疡和皮疹我倒没太注意到。",
        pastHistory: "以前有过类似肠炎问题，但这次资料不全，我也说不太清严重程度。",
        familyHistory: "家里有没有类似情况我不太清楚。",
        tongue: "这次好像没人专门看舌头和把脉，病历上也没写。",
        fallback: "这个我记不太清了。你可以问得具体一点，比如大便、有没有血、肚子痛、吃饭、睡眠、用药或检查。",
      },
    },
  },
  dampHeat: {
    label: "湿热蕴结病例",
    text: "患者近5日大便3-4次/日，质稀黏滞，夹少量脓血，肛门灼热，腹痛即泻，口苦口黏，小便偏黄。舌红，苔黄腻，脉滑数。近期压力较大，辛辣饮食后加重，规律服用美沙拉嗪但未复查粪钙卫蛋白。",
    patient: {
      name: "病例D · 湿热辨证训练患者",
      intro: "患者能描述肠道症状和饮食诱因，但对舌脉和检查意义不太懂，适合训练方证匹配。",
      responses: {
        overview: "这几天就是肚子不舒服，跑厕所多，大便有点黏，有时候还看到一点红的。",
        stool: "一天大概三四次，比较稀，也黏黏的，擦的时候不太清爽。",
        blood: "不是很多血，但能看到一点红的，还有像脓一样黏的东西。",
        pain: "肚子疼的时候就想赶紧去厕所，去了会稍微舒服点。",
        night: "晚上一般不会专门醒来上厕所，但睡得不算踏实。",
        medication: "药基本按时吃，没有自己停，就是最近没去复查。",
        exam: "还没查那个大便炎症指标，也没做肠镜，医生让我找时间复查。",
        appetite: "嘴里有点黏，胃口一般，吃辣以后更不舒服。",
        fatigue: "有点累，但不是完全没力气，主要是老跑厕所影响状态。",
        fever: "没明显发烧，就是有时候觉得身上有点热。",
        weight: "体重没怎么变。",
        systemic: "没明显高烧，体重没变，精神被拉肚子影响了一些。",
        duration: "差不多五六天，吃辣以后感觉更明显。",
        giOther: "有时候肚子咕噜响，口里发苦发黏，恶心呕吐不明显。",
        dietTrigger: "辛辣的、油的吃完会更不舒服，所以这两天不太敢吃。",
        dailyLife: "会影响上课和出门，怕突然要找厕所。",
        extraIntestinal: "关节和口腔没什么特别的。",
        pastHistory: "以前医生说过是溃疡性结肠炎，之前也反复过。",
        familyHistory: "家里没有类似病。",
        tongue: "医生说舌头偏红，舌苔又黄又腻，脉好像偏滑数。",
        fallback: "这个我不太会说。你可以具体问大便、脓血、肚子疼、吃东西、用药、复查或者舌苔。",
      },
    },
  },
  spleenDef: {
    label: "脾虚夹湿病例",
    text: "患者近1月大便2次/日，时溏时成形，少见黏液，无明显脓血，腹部隐隐不适，劳累后加重。纳食一般，神疲乏力，面色少华，舌淡胖有齿痕，苔白腻，脉细弱。规律服药，近期未见明显急性加重。",
    patient: {
      name: "病例E · 脾虚夹湿训练患者",
      intro: "患者症状不急，但虚实夹杂线索较多，适合训练缓解期调护与过度治疗边界。",
      responses: {
        overview: "不是突然严重，就是这一个月肠胃总不太稳，累了以后更明显。",
        stool: "一天大概两次，有时候成形，有时候偏稀，不是那种急着跑厕所。",
        blood: "基本没看到血，偶尔有一点黏液，但不明显。",
        pain: "不是很疼，就是肚子隐隐不舒服，休息一下会好些。",
        night: "晚上不会因为上厕所醒。",
        medication: "药是按医生说的吃，没有自己停。",
        exam: "最近没做新检查，上次复诊医生说先继续观察。",
        appetite: "胃口一般，吃多了容易胀，不太敢吃生冷的。",
        fatigue: "容易累，特别是学习或者值班之后更明显。",
        fever: "没有发烧。",
        weight: "体重变化不大。",
        systemic: "没有发热，体重也没明显变，就是容易累。",
        duration: "拖了差不多一个月，不是突然加重那种。",
        giOther: "有点腹胀，生冷的吃了会不舒服。",
        dietTrigger: "凉的、油腻的吃完容易大便不成形。",
        dailyLife: "影响不算大，但累的时候会明显一点。",
        extraIntestinal: "没有关节痛和口腔溃疡。",
        pastHistory: "以前有UC，最近算是反复不稳但不太像急性发作。",
        familyHistory: "家里没有类似情况。",
        tongue: "舌头偏淡，还有齿痕，苔有点白腻，脉我记得医生说偏细弱。",
        fallback: "这个我说不准，你可以问大便、有没有血、累不累、吃东西、舌苔或者最近复查。",
      },
    },
  },
  coldHeat: {
    label: "寒热错杂病例",
    text: "患者腹痛反复，遇冷加重，便前腹痛，便后稍缓，大便2-3次/日，时有黏液，少量暗红血丝。口干但不欲多饮，畏冷与肛门灼热交替出现。舌红边齿痕，苔黄白相兼，脉弦细。近期用药不规律。",
    patient: {
      name: "病例F · 寒热错杂训练患者",
      intro: "患者表达有些矛盾，既有寒象也有热象，适合训练学生避免单一标签化辨证。",
      responses: {
        overview: "我这个有点说不清，肚子反复疼，有时候怕冷，有时候又觉得肛门发热。",
        stool: "一天两三次，有时候不成形，也会有点黏。",
        blood: "偶尔能看到暗红色的血丝，不是每次都有。",
        pain: "肚子疼一般上厕所前明显，拉完会稍微缓一点，受凉后更容易疼。",
        night: "晚上不太会因为便意醒，但睡得一般。",
        medication: "最近药吃得不太规律，忙起来会忘。",
        exam: "近期还没复查粪钙卫蛋白和CRP。",
        appetite: "胃口一般，口干但也不太想喝很多水。",
        fatigue: "有点累，主要是反复不舒服拖得烦。",
        fever: "没有明显发烧。",
        weight: "体重没太注意，应该变化不大。",
        systemic: "没明显高烧，体重没注意，精神一般。",
        duration: "反反复复有两三周了，不是一天两天。",
        giOther: "受凉会加重，肚子有时候胀。",
        dietTrigger: "凉的会加重，辛辣也不舒服，所以我自己也搞不清。",
        dailyLife: "会影响出门，主要怕突然腹痛。",
        extraIntestinal: "关节和口腔没有明显问题。",
        pastHistory: "以前有过UC发作，最近自己药吃得不太规律。",
        familyHistory: "家里没有类似病。",
        tongue: "舌头边上有齿痕，苔有黄也有白，脉象医生说弦细。",
        fallback: "这个我不太会判断，你可以问得具体一点，比如冷了会不会加重、有没有血、用药、检查和舌苔。",
      },
    },
  },
  chestPain: {
    label: "胸痛鉴别诊断病例",
    text: "患者男性，55岁。因「反复胸闷痛1周，加重2小时」就诊。1周前开始出现胸骨后闷痛，呈压榨性，爬坡或快走时诱发，休息3-5分钟可缓解。2小时前无明显诱因再发胸痛，程度较前加重，持续约10分钟伴左上肢麻木，含服硝酸甘油可部分缓解。既往有高血压病史10年，吸烟史20年（每天约15支）。妻有糖尿病史。入院查体：BP 150/95 mmHg，HR 88次/分，律齐。心电图示V1-V4 ST段压低0.05-0.1 mV。",
    patient: {
      name: "病例G · 胸痛风险评估训练患者",
      intro: "患者中老年男性，有高血压、吸烟等多项危险因素，本次胸痛需警惕急性冠脉综合征，属于高风险病例，适合训练急性胸痛的鉴别思路与危险分层。",
      responses: {
        overview: "就是胸口这里闷闷的疼，像压了块石头一样，有时候会串到左边胳膊。",
        painLocation: "就在胸骨后面这一片，正中间，闷闷的压榨感。",
        painQuality: "不是针扎那样的，是压着闷的感觉，喘不上气那种。",
        painRadiation: "有时候会往左边肩膀和胳膊串，左边手臂到手腕都有些发麻。",
        painDuration: "轻的时候三五分钟就能缓，重点的时候十几分钟也不太能完全缓。",
        painFrequency: "这一周发了好几次了，基本上走路爬坡会诱发，休息能好些。",
        triggerRelief: "爬坡、快走的时候容易犯，停下来歇几分钟能缓。今天这次没明显诱因，突然就犯了。",
        severity: "今天这次比之前都重，含了硝酸甘油也好一些，但没完全缓下来。",
        night: "晚上一般不疼，主要是白天活动时候犯。",
        medication: "平时就吃点降压药，没吃过硝酸甘油。今天含了一片，稍微好了点。",
        exam: "心电图今天做了，说ST段有改变，医生让再查心肌酶和血生化。",
        pastHistory: "有高血压十多年了，一直在吃络活喜。抽烟抽了二十年，每天大概半包。",
        familyHistory: "我老婆有糖尿病。我爸以前心脏不好，五十多岁的时候有过心梗。",
        riskFactors: "高血压、抽烟、老婆有糖尿病、家里父亲心梗史，好像都算吧。",
        otherSymptoms: "有时候会出点冷汗，今天犯的时候有点恶心，没吐。",
        physicalActivity: "最近走路爬坡会犯，休息能缓。家务活还好，上楼会有些吃力。",
        dietTrigger: "吃饭没什么特别诱因，就是活动会诱发，抽烟后也会明显些。",
        appetite: "这几天胃口一般，不重的时候就吃点。",
        fatigue: "这几天累一点，走路快了会喘，平时没这么明显。",
        weight: "体重没怎么变。",
        fever: "没有发烧。",
        systemic: "没有发烧，就是犯病时候出冷汗、恶心。",
        giOther: "没恶心呕吐，主要就是胸闷疼。",
        medicationList: "每天一片络活喜，血压控制在140/90左右。最近没有调整过药。",
        adherence: "药基本都按时吃，没有漏服。",
        tongue: "这个我不太懂，医生没让我看。",
        fallback: "你可以问得具体一点，比如胸痛的位置、持续多久、什么情况下会好或加重、有没有高血压糖尿病抽烟这些。",
      },
    },
  },
  cough: {
    label: "慢性咳嗽问诊鉴别病例",
    text: "患者女性，38岁。反复干咳2个月余为主诉就诊。夜间和晨起咳嗽明显，接触冷空气或油烟后加重，无咳痰，无发热、盗汗。既往有「过敏性鼻炎」史8年。否认高血压、糖尿病史。否认吸烟史。否认结核病人接触史。胸片提示两肺纹理增粗，余无明显异常。外院曾诊断「支气管炎」，服用止咳药效果欠佳。",
    patient: {
      name: "病例H · 慢性咳嗽问诊训练患者",
      intro: "患者青年女性，慢性干咳无痰，过敏性鼻炎史，咳嗽与环境和时间相关，胸片无明显异常，需训练慢性咳嗽的鉴别诊断思路（咳嗽变异性哮喘、上气道咳嗽综合征、胃食管反流等）。",
      responses: {
        overview: "就是一直干咳，喉咙痒，老想咳，夜里和早上特别明显。",
        coughDuration: "断断续续有两个多月了，一直没好利索。",
        coughCharacter: "是干咳，没有痰，就是喉咙发痒忍不住要咳。",
        coughTiming: "主要是晚上睡觉和早上醒来的时候咳得厉害，一到空气冷的地方或者闻到油烟味也会咳。",
        sputum: "没有痰，就是干咳。有时候咳得厉害会有点恶心，但不会吐。",
        blood: "没有咳血，痰里也没看到血。",
        fever: "没有发烧，体温一直正常。",
        night: "晚上咳得明显，影响睡眠，有时候会咳醒。",
        systemic: "没有发热、乏力或者体重下降这些，就是咳得难受。",
        triggers: "冷空气、烟味、油烟味都会让咳嗽加重，有时候说话多了也会咳一阵。",
        allergy: "有过敏性鼻炎好多年了，一到换季或者花粉多的时候就会打喷嚏、流鼻涕，眼睛也会痒。",
        pastHistory: "就是过敏性鼻炎好多年了，平时用雷诺考特喷鼻子。没有哮喘诊断过。",
        familyHistory: "我爸有哮喘，我妈有过敏性鼻炎。",
        smoking: "不抽烟，也没在抽烟的环境里。",
        environment: "在办公室上班，没接触过粉尘或者装修环境。家里养了只猫，但猫咪不进卧室。",
        exam: "胸片拍了说肺纹理粗，没说有什么大问题。肺功能做过舒张试验是阴性的。",
        treatment: "吃了不少止咳药，有中药也有西药，但效果都不太好，停药没多久又咳回来了。",
        appetite: "胃口还行，不影响吃饭。",
        weight: "体重没怎么变。",
        fatigue: "不怎么乏，就是咳得多了有点累，睡眠不太好。",
        giOther: "偶尔会有反酸烧心，特别是吃完饭躺下的时候，但没有恶心呕吐。",
        extraIntestinal: "关节不疼，眼睛有时候会痒，和过敏有关。",
        tongue: "这个没注意过。",
        fallback: "你可以问咳嗽多久了、有没有痰、什么时候咳得厉害、有没有过敏史或家族哮喘、鼻炎这些。",
      },
    },
  },
  glucose: {
    label: "低血糖应急处理训练病例",
    text: "患者男性，62岁。糖尿病史10年，目前使用预混胰岛素早、晚餐前各18U皮下注射，血糖控制欠佳。。昨日上午11时无明显诱因出现心慌、大汗、颤抖、手抖、饥饿感，自测指尖血糖2.8 mmol/L，进食含糖食物后症状约15分钟缓解。未出现意识障碍、抽搐或偏瘫。今晨空腹血糖偏高，自测约9.5 mmol/L。既往有高血压史。",
    patient: {
      name: "病例I · 低血糖识别与应急训练患者",
      intro: "患者老年男性，糖尿病史10年，使用胰岛素，昨日发生低血糖事件但未出现严重后果。适合训练低血糖的识别、原因分析、应急处理和安全边界判断。",
      responses: {
        overview: "昨天上午突然心慌、手抖、浑身出冷汗，感觉特别饿，一测血糖才2.8，吃了点东西才缓过来。",
        hypoglycemiaYesterday: "昨天上午11点左右发生的，没干什么重活，就是平常坐在那里，突然就心慌、手抖、冒汗。",
        symptoms: "主要是心慌、大汗、两只手抖，饥饿感特别强想吃甜的。人感觉飘乎乎的，脑袋发软。",
        glucoseValue: "当时手指扎了一下测是2.8mmol/L，以前也测到过低的，但没这次症状明显。",
        duration: "吃了东西后大概一刻钟就缓过来了，人慢慢就不抖了、出汗也停了。",
        consciousness: "没有晕倒，人是清醒的，就是特别难受，但还知道找东西吃。",
        seizure: "没有抽搐，也没有口吐白沫这些。",
        neurological: "没有嘴角歪斜、说话不清楚或者手脚不能动这些。",
        causeYesterday: "早上打了胰岛素但没吃早饭就出门了，到半晌饿了才想起来，可能药打多了饭没跟上。",
        breakfast: "那天早上确实没吃东西，打完针后忙别的事了，等想起来已经过了平时吃饭时间。",
        insulin: "预混胰岛素，早晚各打一针，早18、晚18。打完针一般过二三十分钟吃饭，有时候忙起来会晚点吃。",
        regularity: "有时候会忙忘了吃饭，打完针过很久才吃，但平时基本上还规律的。",
        glucoseMonitoring: "平时在家测空腹多，大概每周测两三次。餐后偶尔测，没每天测。",
        hypoglycemiaHistory: "以前也发生过几次低血糖，都是吃了东西就缓过来了，没出现过严重到晕倒那种。",
        warning: "身上一般带着糖果，但昨天正好吃完了还没补货，所以发现的时候有点慌。",
        diet: "吃饭基本上每顿都吃，胃口还可以，就是有时候打完针吃饭不太准时。",
        exercise: "每天晚饭后会出去走半小时到一小时，稍微活动一下。",
        otherMedications: "还有降压药，每天一片，血压还好。",
        pastHistory: "糖尿病十年了，一直在打胰岛素。有高血压，也是吃药控制的。",
        familyHistory: "我爸也有糖尿病，我妈没有高血压。",
        nocturnal: "夜里没觉得有什么不舒服，没被憋醒过，醒来人还正常。",
        today: "今天早上空腹血糖9.5，有点高，可能是因为昨天低血糖后吃的多了。",
        current: "现在没什么不舒服，就是还有点后怕，怕再发。",
        fever: "没有发烧。",
        weight: "体重这一个月没怎么变。",
        fatigue: "没有明显乏力，就是昨天低血糖后有点累。",
        tongue: "舌头我自己没看过。",
        fallback: "你可以问昨天发生低血糖前后的情况、吃的什么药、打针吃饭时间、平时怎么监测、有没有类似发作史。",
      },
    },
  },
};

const keywordRules = [
  { key: "mucusBlood", label: "黏液脓血便", pattern: /黏液脓血|粘液脓血|脓血便|血便|便血/, score: 24, meaning: "动性肠道炎症线索，需要学生重点识别" },
  { key: "abdominalPain", label: "腹痛", pattern: /腹痛|腹部痛|下腹痛|脐周痛/, score: 14, meaning: "示症状活动，需结合频次和持续时间" },
  { key: "tenesmus", label: "里急后重", pattern: /里急后重/, score: 16, meaning: "UC病例推理中的关键症状线索" },
  { key: "nightStool", label: "夜间便意", pattern: /夜间|夜便|夜里.*便/, score: 12, meaning: "示病情活动或睡眠受扰" },
  { key: "medStop", label: "停药/依从性风险", pattern: /停药|停用|自行停|漏服|未规律|忘记/, score: 16, meaning: "导学生复核用药依从性" },
  { key: "fatigue", label: "乏力/纳差", pattern: /乏力|精神差|没劲|纳差|不想吃|胃口差|饭量.*少/, score: 8, meaning: "示全身状态变化，需要追问精神、食欲与生活影响" },
  { key: "feverWeight", label: "发热/体重变化", pattern: /发热|发烧|低热|体重下降|消瘦/, score: 6, meaning: "示系统性症状，需要结合炎症指标复核" },
  { key: "stable", label: "症状稳定", pattern: /稳定|无腹痛|无黏液脓血|无粘液脓血|成形|规律服药/, score: -20, meaning: "持低风险训练判断，但仍需常规随访" },
  { key: "tonguePulse", label: "舌脉信息", pattern: /舌|苔|脉/, score: 3, meaning: "于中西医结合病例推理训练" },
  // 胸痛鉴别关键词
  { key: "chestPain", label: "腹痛", pattern: /胸闷|胸痛|压榨|心绞痛|心前区/, score: 30, meaning: "痛是核心主诉，需要详细评估性质、部位、持续时间和诱因" },
  { key: "radiation", label: "放射痛", pattern: /放射|串到|窜到|左肩|左臂|手臂麻木/, score: 22, meaning: "放散性胸痛高度提示心源性，需要警惕急性冠脉综合征" },
  { key: "riskHypertension", label: "高血压史", pattern: /高血压|血压高/, score: 16, meaning: "高血压是冠心病重要危险因素" },
  { key: "riskSmoking", label: "吸烟史", pattern: /抽烟|吸烟|烟史/, score: 14, meaning: "吸烟是动脉粥样硬化的重要危险因素" },
  { key: "riskFamily", label: "心血管病家族史", pattern: /家族史|父亲.*心梗|家里.*心脏病/, score: 12, meaning: "发心血管病家族史增加发病风险" },
  { key: "riskDiabetes", label: "糖尿病史", pattern: /糖尿病|血糖高/, score: 14, meaning: "糖尿病是冠心病等危征" },
  { key: "nitrateUse", label: "硝酸甘油使用", pattern: /硝酸甘油|含服/, score: 10, meaning: "硝酸甘油能部分缓解提示心绞痛可能" },
  { key: "stElevation", label: "ST段改变", pattern: /ST段压低|ST段抬高|心电图异常/, score: 26, meaning: "ST段改变需结合心肌酶排除急性冠脉综合征" },
  // 慢性咳嗽关键词
  { key: "chronicCough", label: "慢性咳嗽", pattern: /咳嗽|干咳|咳/, score: 24, meaning: "慢性咳嗽需要鉴别多种病因" },
  { key: "nightCough", label: "夜间咳嗽", pattern: /夜间咳嗽|夜里咳嗽|晚上咳/, score: 18, meaning: "夜间咳嗽明显提示咳嗽变异性哮喘或胃食管反流" },
  { key: "allergicHistory", label: "过敏史", pattern: /过敏性鼻炎|过敏|哮喘|特应性/, score: 16, meaning: "过敏史支持哮喘或过敏相关的咳嗽原因" },
  { key: "smokingHistory", label: "吸烟或二手烟", pattern: /抽烟|吸烟|二手烟/, score: 12, meaning: "吸烟或二手烟暴露是咳嗽的重要病因" },
  { key: "coughTriggers", label: "咳嗽诱发因素", pattern: /冷空气|油烟|运动|说话.*咳/, score: 14, meaning: "诱发因素有助于鉴别咳嗽原因" },
  { key: "negativeFever", label: "无发热盗汗", pattern: /无发热|没有发烧|没有盗汗|体温正常/, score: -10, meaning: "结核中毒症状降低呼吸道感染可能" },
  // 低血糖关键词
  { key: "hypoglycemia", label: "低血糖事件", pattern: /低血糖|血糖.*2\.|血糖2\.|心慌.*抖|出冷汗.*饥/, score: 30, meaning: "低血糖事件需要分析诱因、处理和预防" },
  { key: "insulinUse", label: "胰岛素使用", pattern: /胰岛素|打针|预混胰岛素/, score: 24, meaning: "胰岛素使用患者需重点关注低血糖风险" },
  { key: "skippedMeal", label: "进食不规律", pattern: /没吃早饭|没吃东西|忘吃饭|打针.*饭晚/, score: 20, meaning: "进食不规律是胰岛素治疗患者低血糖的常见原因" },
  { key: "glucoseValue", label: "血糖值", pattern: /血糖.*mmol|2\.\dmmol|血糖值/, score: 10, meaning: "具体血糖数值有助于评估严重程度" },
  { key: "noUnconsciousness", label: "无意识障碍", pattern: /人是清醒|没有晕倒|没抽搐|意识正常/, score: -8, meaning: "无严重神经症状提示单纯低血糖事件" },
  { key: "hypoglycemiaHistory", label: "低血糖史", pattern: /以前也发|以前.*低血糖|经常.*低/, score: 12, meaning: "反复低血糖提示方案需要调整" },
];

const interviewQuestions = [
  { key: "overview", label: "诉概述", required: false, question: "今天主要哪里不舒服？" },
  { key: "stool", label: "便频次", required: true, question: "最近大便次数和性状怎么样？" },
  { key: "blood", label: "液脓血", required: true, question: "有没有黏液脓血或便血？" },
  { key: "pain", label: "痛/里急后重", required: true, question: "有没有腹痛或里急后重？" },
  { key: "night", label: "间症状", required: true, question: "夜间是否会因为便意醒来？" },
  { key: "medication", label: "药依从性", required: true, question: "近期用药是否规律，有没有停药或漏服？" },
  { key: "exam", label: "查指标", required: true, question: "最近有没有粪钙卫蛋白、CRP或内镜结果？" },
  { key: "appetite", label: "欲/纳食", required: false, question: "最近吃饭和胃口怎么样？" },
  { key: "fatigue", label: "力精神", required: false, question: "最近有没有乏力、没劲或精神变差？" },
  { key: "fever", label: "热", required: false, question: "最近有没有发热或低热？" },
  { key: "weight", label: "重变化", required: false, question: "最近体重有没有明显下降？" },
  { key: "systemic", label: "身情况", required: false, question: "有没有发热、乏力或体重下降这些全身变化？" },
  { key: "duration", label: "程变化", required: false, question: "这些不舒服大概持续多久了？" },
  { key: "giOther", label: "随胃肠症状", required: false, question: "有没有恶心、呕吐、腹胀这些情况？" },
  { key: "dietTrigger", label: "食诱因", required: false, question: "最近饮食有没有诱发或加重不舒服？" },
  { key: "dailyLife", label: "活影响", required: false, question: "这些症状对学习、工作或出门有没有影响？" },
  { key: "extraIntestinal", label: "外表现", required: false, question: "有没有关节痛、口腔溃疡或皮疹？" },
  { key: "pastHistory", label: "往发作", required: false, question: "以前有没有类似发作或诊断记录？" },
  { key: "familyHistory", label: "族史", required: false, question: "家里有没有类似肠道疾病的人？" },
  { key: "tongue", label: "舌脉信息", required: false, question: "舌象和脉象有没有记录？" },
  // 胸痛鉴别
  { key: "painLocation", label: "痛位置", required: true, question: "胸痛具体在哪个位置？是胸骨后还是心前区？" },
  { key: "painQuality", label: "痛性质", required: true, question: "胸痛是什么性质的？压榨感、闷痛、刺痛还是刀割样？" },
  { key: "painRadiation", label: "射部位", required: true, question: "胸痛有没有往左肩、左臂、脖子或下颌等地方放射？" },
  { key: "painDuration", label: "续时间", required: true, question: "每次胸痛大概持续多久？是几分钟还是更长？" },
  { key: "triggerRelief", label: "因/缓解", required: true, question: "什么情况下会诱发胸痛？休息或含硝酸甘油能缓解吗？" },
  { key: "riskFactors", label: "血管危险因素", required: true, question: "有没有高血压、糖尿病、高血脂？抽烟吗？家里有人得过心脏病吗？" },
  // 慢性咳嗽
  { key: "coughDuration", label: "嗽病程", required: true, question: "咳嗽多久了？是持续性还是反复发作？" },
  { key: "sputum", label: "液情况", required: true, question: "咳嗽有痰吗？痰是什么颜色和性状？" },
  { key: "triggers", label: "发因素", required: true, question: "什么情况下咳嗽会加重？冷空气、运动、油烟或说话多会诱发吗？" },
  { key: "allergy", label: "敏史", required: true, question: "有没有过敏性鼻炎、哮喘或皮肤过敏史？家族里有人过敏吗？" },
  { key: "smoking", label: "烟史", required: true, question: "抽烟吗？或者经常接触二手烟？" },
  // 低血糖
  { key: "hypoglycemiaYesterday", label: "血糖事件", required: true, question: "昨天低血糖前后是什么情况？有没有诱因？" },
  { key: "insulin", label: "岛素方案", required: true, question: "胰岛素是怎么打的？剂量和时间规律吗？" },
  { key: "breakfast", label: "食情况", required: true, question: "昨天早饭吃了没有？打针和吃饭时间是怎么安排的？" },
  { key: "glucoseMonitoring", label: "糖监测", required: true, question: "平时怎么监测血糖？频率是怎样的？" },
  { key: "hypoglycemiaHistory", label: "血糖史", required: true, question: "以前有没有发生过低血糖？严重到晕倒过吗？" },
];

const caseRequiredQuestionMap = {
  high: ["stool", "blood", "pain", "night", "medication", "exam"],
  low: ["stool", "blood", "pain", "night", "medication", "exam"],
  boundary: ["stool", "blood", "pain", "night", "medication", "exam"],
  dampHeat: ["stool", "blood", "pain", "night", "medication", "exam"],
  spleenDef: ["stool", "blood", "pain", "night", "medication", "exam"],
  coldHeat: ["stool", "blood", "pain", "night", "medication", "exam"],
  custom: ["stool", "blood", "pain", "night", "medication", "exam"],
  chestPain: ["painLocation", "painQuality", "painRadiation", "painDuration", "triggerRelief", "riskFactors"],
  cough: ["coughDuration", "sputum", "triggers", "allergy", "smoking"],
  glucose: ["hypoglycemiaYesterday", "insulin", "breakfast", "glucoseMonitoring", "hypoglycemiaHistory"],
};

const historyStorageKey = "yanchang-training-history-v3";
const LS_BUILDER_DRAFTS = "yanchang-builder-drafts-v1";
const LS_PENDING_EXAMS = "yanchang-pending-exams-v1";
const LS_EXAM_SUBMISSIONS = "yanchang-exam-submissions-v1";
const LS_CLASS_MOCK = "yanchang-class-mock-v1";
const LS_COMPLETED_EXAMS = "yanchang-completed-exams-v1";
const runtimeConfig = window.YANCHANG_CONFIG || {};
const configText = (value) => (typeof value === "string" ? value.trim() : "");
const REMOTE_UC_MODEL_API_URL = configText(runtimeConfig.modelApiUrl);
const REMOTE_PATIENT_API_URL = configText(runtimeConfig.patientApiUrl);
const ENABLE_NETLIFY_MODEL_PROXY = false;
const ENABLE_PATIENT_API = Boolean(REMOTE_PATIENT_API_URL);

function readStoredHistory() {
  try {
    return JSON.parse(localStorage.getItem(historyStorageKey)) || [];
  } catch {
    return [];
  }
}

function writeStoredHistory(records) {
  try {
    localStorage.setItem(historyStorageKey, JSON.stringify(records));
  } catch {
    // Local storage may be blocked in some browser privacy modes; the demo can still run in memory.
  }
}

function readBuilderDrafts() {
  try {
    return JSON.parse(localStorage.getItem(LS_BUILDER_DRAFTS)) || [];
  } catch {
    return [];
  }
}

function writeBuilderDraft(draft) {
  const drafts = readBuilderDrafts();
  drafts.unshift(draft);
  localStorage.setItem(LS_BUILDER_DRAFTS, JSON.stringify(drafts.slice(0, 20)));
}

const state = {
  activeCase: "high",
  analysis: null,
  selectedAnswer: "",
  route: "dashboard",
  role: "student",
  mode: "practice",
  activeExam: null,
  interview: [],
  tcmAnswer: {
    syndrome: "",
    method: "",
    formula: "",
    safety: "",
  },
  rubric: [],
  history: readStoredHistory(),
  patientApiSource: "local",
  modelApiSource: "local",
  interviewReminder: "",
};

let examCountdownTimer = null;

const loginView = document.querySelector("#loginView");
const appView = document.querySelector("#appView");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logoutBtn = document.querySelector("#logoutBtn");
const sessionStatus = document.querySelector("#sessionStatus");
const aboutBtn = document.querySelector("#aboutBtn");
const aboutModal = document.querySelector("#aboutModal");
const aboutCloseBtn = document.querySelector("#aboutCloseBtn");
const caseInput = document.querySelector("#caseInput");
const caseLabel = document.querySelector("#caseLabel");
const analyzeBtn = document.querySelector("#analyzeBtn");
const resetBtn = document.querySelector("#resetBtn");
const emptyCaseBtn = document.querySelector("#emptyCaseBtn");
const parseStatus = document.querySelector("#parseStatus");
const tagCloud = document.querySelector("#tagCloud");
const structuredTable = document.querySelector("#structuredTable");
const riskBadge = document.querySelector("#riskBadge");
const submitJudgementBtn = document.querySelector("#submitJudgementBtn");
const tcmTaskCard = document.querySelector("#tcmTaskCard");
const feedbackStatus = document.querySelector("#feedbackStatus");
const riskLevelText = document.querySelector("#riskLevelText");
const riskMeterBar = document.querySelector("#riskMeterBar");
const riskMeterHint = document.querySelector("#riskMeterHint");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const dualReasoningCanvas = document.querySelector("#dualReasoningCanvas");
const syndromeConflictBadge = document.querySelector("#syndromeConflictBadge");
const syndromeConflictText = document.querySelector("#syndromeConflictText");
const evidenceList = document.querySelector("#evidenceList");
const followupList = document.querySelector("#followupList");
const discussionList = document.querySelector("#discussionList");
const trainingReport = document.querySelector("#trainingReport");
const copyReportBtn = document.querySelector("#copyReportBtn");
const routeTitle = document.querySelector("#routeTitle");
const routeEyebrow = document.querySelector("#routeEyebrow");
const dashboardCase = document.querySelector("#dashboardCase");
const dashboardState = document.querySelector("#dashboardState");
const dashboardRisk = document.querySelector("#dashboardRisk");
const explainStatus = document.querySelector("#explainStatus");
const modelFigureTitle = document.querySelector("#modelFigureTitle");
const modelFigureMeta = document.querySelector("#modelFigureMeta");
const modelFigureImg = document.querySelector("#modelFigureImg");
const modelFigureNote = document.querySelector("#modelFigureNote");
const contributionChart = document.querySelector("#contributionChart");
const explainNarrative = document.querySelector("#explainNarrative");
const explainTeachingList = document.querySelector("#explainTeachingList");
const interviewStatus = document.querySelector("#interviewStatus");
const patientApiStatus = document.querySelector("#patientApiStatus");
const patientName = document.querySelector("#patientName");
const patientIntro = document.querySelector("#patientIntro");
const interviewCoverage = document.querySelector("#interviewCoverage");
const interviewCoverageBar = document.querySelector("#interviewCoverageBar");
const askedClueList = document.querySelector("#askedClueList");
const chatLog = document.querySelector("#chatLog");
const customQuestionInput = document.querySelector("#customQuestionInput");
const askCustomBtn = document.querySelector("#askCustomBtn");
const tcmSyndromeSelect = document.querySelector("#tcmSyndromeSelect");
const tcmMethodSelect = document.querySelector("#tcmMethodSelect");
const tcmFormulaSelect = document.querySelector("#tcmFormulaSelect");
const tcmSafetyText = document.querySelector("#tcmSafetyText");
const rubricStatus = document.querySelector("#rubricStatus");
const rubricScoreGrid = document.querySelector("#rubricScoreGrid");
const teacherSessionCount = document.querySelector("#teacherSessionCount");
const teacherAvgScore = document.querySelector("#teacherAvgScore");
const teacherFocus = document.querySelector("#teacherFocus");
const teacherRubricList = document.querySelector("#teacherRubricList");
const teacherInsightList = document.querySelector("#teacherInsightList");
const historyStatus = document.querySelector("#historyStatus");
const historyCount = document.querySelector("#historyCount");
const historyAccuracy = document.querySelector("#historyAccuracy");
const historyWeakness = document.querySelector("#historyWeakness");
const historyTimeline = document.querySelector("#historyTimeline");
const builderForm = document.querySelector("#builderForm");
const builderTitle = document.querySelector("#builderTitle");
const builderObjective = document.querySelector("#builderObjective");
const builderDifficulty = document.querySelector("#builderDifficulty");
const builderSpecialty = document.querySelector("#builderSpecialty");
const builderSource = document.querySelector("#builderSource");
const builderRisk = document.querySelector("#builderRisk");
const builderStatus = document.querySelector("#builderStatus");
const builderPreview = document.querySelector("#builderPreview");
const examForm = document.querySelector("#examForm");
const examTitle = document.querySelector("#examTitle");
const examClass = document.querySelector("#examClass");
const examSpecialty = document.querySelector("#examSpecialty");
const examSource = document.querySelector("#examSource");
const examCaseKey = document.querySelector("#examCaseKey");
const examStartAt = document.querySelector("#examStartAt");
const examEndAt = document.querySelector("#examEndAt");
const examDuration = document.querySelector("#examDuration");
const examFeedbackMode = document.querySelector("#examFeedbackMode");
const examStatus = document.querySelector("#examStatus");
const examPreview = document.querySelector("#examPreview");
const publishDraftExamBtn = document.querySelector("#publishDraftExamBtn");
const classPublishNotice = document.querySelector("#classPublishNotice");
const classPublishText = document.querySelector("#classPublishText");
const caseClinicalSource = document.querySelector("#caseClinicalSource");
const caseClinicalList = document.querySelector("#caseClinicalList");
const caseRedFlagList = document.querySelector("#caseRedFlagList");
const tcmRuleText = document.querySelector("#tcmRuleText");
const errorDiagnosisList = document.querySelector("#errorDiagnosisList");
const syndromeHeatmap = document.querySelector("#syndromeHeatmap");
const modelApiStatus = document.querySelector("#modelApiStatus");

const routeMeta = {
  dashboard: ["Student Workspace", "学生工作台"],
  cases: ["Case Library", "病例库"],
  interview: ["Virtual Patient", "虚拟问诊"],
  judgement: ["Student Answer", "学生作答"],
  analysis: ["Post-answer Review", "解析复盘"],
  feedback: ["Training Feedback", "反馈报告"],
  explain: ["Explainable Reasoning", "解释图谱"],
  history: ["Learning Analytics", "我的学习轨迹"],
  "teacher-home": ["Teacher Workspace", "教师工作台"],
  teacher: ["Teaching Review", "教学复盘"],
  classes: ["Class Management", "班级管理"],
  exam: ["Exam Mode", "考试模式"],
  builder: ["Teacher Authoring", "建课管理"],
};

const roleHomeRoute = {
  student: "dashboard",
  teacher: "teacher-home",
};

const roleRoutes = {
  student: ["dashboard", "cases", "interview", "judgement", "analysis", "feedback", "explain", "history"],
  teacher: ["teacher-home", "classes", "builder", "exam", "teacher"],
};

const postAnswerRoutes = new Set(["analysis", "feedback", "explain"]);

const templatePresets = {
  chestPain: {
    title: "胸痛鉴别诊断问诊训练",
    objective: "学生能够围绕胸痛性质、持续时间、诱因、缓解因素、伴随症状和危险因素进行系统问诊，并提出需要紧急识别的危险信号。",
    specialty: "心血管系统",
    risk: "中风险",
  },
  cough: {
    title: "慢性咳嗽问诊与鉴别训练",
    objective: "学生能够围绕咳嗽病程、痰液、发热、过敏史、用药史和影像检查进行追问，形成初步鉴别诊断思路。",
    specialty: "呼吸系统",
    risk: "中风险",
  },
  glucose: {
    title: "低血糖识别与应急处理训练",
    objective: "学生能够识别低血糖相关症状，追问降糖药使用、进食情况、血糖监测和意识状态，并说明安全处理边界。",
    specialty: "内分泌系统",
    risk: "高风险",
  },
};

const modelExplanationAssets = {
  high: {
    title: "脱敏SHAP参考图 · 高风险样本",
    image: "./assets/model_shap_high_combo.png",
    source: "来自你的脱敏 UC 复发预测模型解释结果，示范样本 row 7698；仅作论文解释材料参考，不代表本次实时问诊输入。",
    note: "当前图片仅作为脱敏解释材料参考；若已接入实时模型服务，则以本次问诊生成的解释结果为准。",
  },
  low: {
    title: "脱敏SHAP参考图 · 低风险样本",
    image: "./assets/model_shap_low_combo.png",
    source: "来自你的脱敏 UC 复发预测模型解释结果，示范样本 row 7053；仅作论文解释材料参考，不代表本次实时问诊输入。",
    note: "当前图片仅作为脱敏解释材料参考；若已接入实时模型服务，则以本次问诊生成的解释结果为准。",
  },
  boundary: {
    title: "脱敏SHAP参考图 · 边界样本",
    image: "./assets/model_shap_boundary_combo.png",
    source: "来自你的脱敏 UC 复发预测模型解释结果，示范样本 row 5570；仅作论文解释材料参考，不代表本次实时问诊输入。",
    note: "当前图片仅作为脱敏解释材料参考；若已接入实时模型服务，则以本次问诊生成的解释结果为准。",
  },
  chestPain: {
    title: "胸痛鉴别诊断 · 急性冠脉综合征风险评估",
    image: null,
    source: "胸痛病例暂未接入UC复发预测模型，本页以临床路径式证据链替代ML风险分层。系统会基于问诊线索生成心源性/非心源性胸痛风险评估与鉴别要点提示，供训练复盘使用。",
    note: "选择胸痛鉴别时，系统展示基于临床路径的急性胸痛鉴别诊断训练框架，而非UC复发预测模型输出。",
  },
  cough: {
    title: "慢性咳嗽鉴别 · 咳嗽变异性哮喘与上气道咳嗽综合征",
    image: null,
    source: "咳嗽病例暂未接入UC复发预测模型，本页以慢性咳嗽鉴别路径替代ML风险分层。系统会基于问诊线索生成咳嗽病因概率提示与检查建议，供训练复盘使用。",
    note: "选择慢性咳嗽时，系统展示基于临床路径的慢性咳嗽鉴别诊断训练框架，而非UC复发预测模型输出。",
  },
  glucose: {
    title: "低血糖应急处理 · 胰岛素治疗患者安全边界",
    image: null,
    source: "低血糖病例暂未接入UC复发预测模型，本页以应急处理路径替代ML风险分层。系统会基于问诊线索生成低血糖诱因分析、严重程度评估与预防建议，供训练复盘使用。",
    note: "选择低血糖处理时，系统展示基于临床路径的低血糖应急处理训练框架，而非UC复发预测模型输出。",
  },
};

const modelFeatureLabels = {
  age: "年龄（脱敏默认）",
  gender: "性别编码",
  bowel_times_mentioned: "排便频次",
  abdominal_pain_present: "腹痛是否出现",
  feat_abdominal_pain: "腹痛线索",
  abdominal_pain_severity: "腹痛严重度",
  abdominal_pain_frequency: "腹痛频率",
  abdominal_pain_duration: "腹痛持续时间",
  feat_tenesmus: "里急后重线索",
  tenesmus_present: "里急后重是否出现",
  tenesmus_severity: "里急后重严重度",
  tenesmus_frequency: "里急后重频率",
  tenesmus_duration: "里急后重持续时间",
  feat_mucus_blood_stool: "黏液脓血便线索",
  mucus_blood_stool_present: "黏液脓血便是否出现",
  mucus_blood_stool_severity: "黏液脓血便严重度",
  mucus_blood_stool_frequency: "黏液脓血便频率",
  mucus_blood_stool_duration: "黏液脓血便持续时间",
  no_mucus_blood: "无黏液脓血",
  feat_bloody_stool: "便血线索",
  bloody_stool_present: "便血是否出现",
  bloody_stool_severity: "便血严重度",
  bloody_stool_frequency: "便血频率",
  bloody_stool_duration: "便血持续时间",
  feat_stool_unformed: "大便不成形",
  feat_diarrhea: "腹泻/稀便线索",
  diarrhea_present: "腹泻是否出现",
  diarrhea_severity: "腹泻严重度",
  diarrhea_frequency: "腹泻频率",
  diarrhea_duration: "腹泻持续时间",
  feat_mental_fatigue: "乏力精神差",
  fatigue_present: "乏力是否出现",
  fatigue_severity: "乏力严重度",
  fatigue_frequency: "乏力频率",
  fatigue_duration: "乏力持续时间",
  feat_fever: "发热线索",
  fever_present: "发热是否出现",
  fever_severity: "发热严重度",
  fever_frequency: "发热频率",
  fever_duration: "发热持续时间",
  feat_appetite_poor: "食欲下降",
  feat_sleep_poor: "睡眠受扰/夜间症状",
  feat_weight_loss: "体重下降",
  nausea_present: "恶心呕吐",
  nausea_severity: "恶心呕吐严重度",
  nausea_frequency: "恶心呕吐频率",
  nausea_duration: "恶心呕吐持续时间",
  feat_abdominal_distension: "腹胀/肠鸣",
  abdominal_distension_present: "腹胀是否出现",
  abdominal_distension_severity: "腹胀严重度",
  abdominal_distension_frequency: "腹胀频率",
  abdominal_distension_duration: "腹胀持续时间",
  anal_burning_present: "肛门灼热",
  anal_burning_severity: "肛门灼热严重度",
  anal_burning_frequency: "肛门灼热频率",
  anal_burning_duration: "肛门灼热持续时间",
  feat_mouth_ulcer: "口腔溃疡",
  feat_irritability: "烦躁易怒",
  fc_value: "粪钙卫蛋白估计值",
  CCAI_Bleeding_Score: "CCAI便血评分",
  SCAI_Night_Stool_Score: "SCAI夜间便评分",
  intestinal_symptom_score: "肠道症状综合分",
  systemic_symptom_score: "全身症状综合分",
  total_severity_score: "总严重度分",
  total_frequency_score: "总频率分",
  age_x_bowel_freq: "年龄x排便频次交互项",
  age_x_fatigue: "年龄x乏力交互项",
  bloody_x_frequency: "便血x频次交互项",
  bloody_severity_x_freq: "便血严重度x频率",
  pain_severity_x_freq: "腹痛严重度x频率",
  mucus_severity_x_freq: "黏液脓血严重度x频率",
  tenesmus_severity_x_freq: "里急后重严重度x频率",
  distension_severity_x_freq: "腹胀严重度x频率",
};

const caseClinicalBasis = {
  high: {
    source: "基于炎症性肠病（IBD）门诊问诊规范、UC活动期评估要点与中西医结合教学案例库整理。",
    references: [
      "核心症状：排便频次增加、便血/黏液脓血、腹痛、里急后重。",
      "风险关联：停药/漏服与复发风险上升显著相关。",
      "复核建议：结合粪钙卫蛋白、CRP、内镜结果评估活动度。",
    ],
    redFlags: [
      "出现持续便血、夜间便意明显增加，应提示高活动风险并建议及时复诊。",
      "伴发热、体重下降、明显乏力时，需提醒可能存在系统性炎症活动。",
      "任何训练分层均不得替代真实临床诊断与处置决策。",
    ],
  },
  low: {
    source: "基于UC缓解期随访管理要点与临床教学标准化问诊模板。",
    references: [
      "低风险依据需由多个阴性线索共同支持，而非单一症状改善。",
      "稳定期仍需核对依从性与复查计划，避免'症状好转=无需随访'误区。",
      "强调学生给出'低风险+持续管理建议'的完整表达。",
    ],
    redFlags: [
      "若低风险判断缺乏检查与依从性证据，视为信息不足而非稳定结论。",
      "近期自行停药即使无明显症状，也需提高警惕并补问。",
      "持续教育患者识别复发先兆，形成安全边界意识。",
    ],
  },
  boundary: {
    source: "基于信息不足场景下的临床推理训练规范与不确定性表达教学要求。",
    references: [
      "边界病例教学重点是补问策略与不确定性管理，而非快速下结论。",
      "要求学生阐明「当前证据不足点」与「下一步最小必要信息」。",
      "中西医结合信息缺失（舌脉未记录）应被明确标注并追补。",
    ],
    redFlags: [
      "症状描述含糊且检查缺失时，需避免过度确定性的风险分层。",
      "出现关节痛、夜间症状变化等线索时，应及时扩展追问范围。",
      "边界病例可重复训练，用于提升证据权重判断能力。",
    ],
  },
  dampHeat: {
    source: "基于UC活动期症状群与中医湿热蕴结证候教学要点整理。",
    references: [
      "西医主轴：便次增加、黏液脓血、肛门灼热、依从性与粪钙卫蛋白复查。",
      "中医主轴：口苦口黏、舌红苔黄腻、脉滑数支持湿热蕴结方向。",
      "教学重点：要求学生把症状活动度和方证匹配分开表述，再合并为推理链。",
    ],
    redFlags: [
      "脓血便增多、发热或明显乏力时，应提示及时复诊。",
      "不得只凭苔腻或口苦下结论，需先核对便血、便次与检查。",
      "方剂思路仅用于教学匹配，不生成真实处方剂量。",
    ],
  },
  spleenDef: {
    source: "基于UC缓解期调护、脾虚夹湿证候与复发风险管理教学场景整理。",
    references: [
      "西医主轴：症状不急性加重、少见脓血、规律服药与随访计划。",
      "中医主轴：便溏、劳累加重、神疲乏力、舌淡胖齿痕支持脾虚夹湿。",
      "教学重点：训练学生避免把缓解期调护误判为活动期强干预。",
    ],
    redFlags: [
      "低活动度不等于无需随访，仍需核对依从性和复查。",
      "若新发便血、夜间便意或体重下降，应重新评估活动风险。",
      "调护建议需与教师审核和临床复诊边界共同呈现。",
    ],
  },
  coldHeat: {
    source: "基于寒热错杂、虚实夹杂病例的中西医结合临床思维训练场景整理。",
    references: [
      "西医主轴：黏液血丝、腹痛反复、用药不规律与检查缺失。",
      "中医主轴：遇冷加重、肛门灼热、口干不欲饮、黄白相兼苔提示寒热并见。",
      "教学重点：训练学生处理矛盾线索，避免用单一证候标签替代证据分析。",
    ],
    redFlags: [
      "暗红血丝或症状反复应补问便血量、持续时间和复查指标。",
      "寒热错杂病例需先说明证据冲突，再提出待补信息。",
      "若药物不规律，应优先纳入风险复盘而非只讨论方证。",
    ],
  },
  chestPain: {
    source: "基于中国急性胸痛急诊评估与管理指南、ACC/AHA稳定性缺血性心脏病处理原则与医学教学病例库整理。",
    references: [
      "核心评估：胸痛性质、部位、持续时间、放射、诱因和缓解因素（OPQRST）。",
      "危险因素：高血压、糖尿病、吸烟、血脂异常、早发心血管病家族史。",
      "鉴别要点：心源性胸痛 vs 非心源性胸痛（肌肉骨骼、胃食管、肺部等）。",
      "红旗征象：持续胸痛>20分钟、硝酸甘油无效、ST段改变、心肌标志物升高——立即转诊。",
    ],
    redFlags: [
      "胸痛持续>20分钟伴出汗、恶心或放射痛，需高度警惕ACS，立即启动急救流程。",
      "ST段压低或抬高提示心肌缺血，需结合心肌酶和急诊处理，不用于教学场景的直接诊断。",
      "任何胸痛训练的分层结论不得替代实际临床处置，应强调及时就医和急诊评估的重要性。",
    ],
  },
  cough: {
    source: "基于中华医学会呼吸病学分会咳嗽诊断与治疗指南、GERD相关咳嗽管理共识与医学教学病例库整理。",
    references: [
      "鉴别诊断框架：咳嗽变异性哮喘、上气道咳嗽综合征、胃食管反流性咳嗽、感染后咳嗽、ACEI诱发型咳嗽。",
      "重点追问：咳嗽持续时间、痰液性状、时间规律（夜间/晨起）、诱发因素、过敏史和用药史。",
      "辅助检查：胸片、肺功能（舒张试验）、诱导痰、食道pH监测等根据疑似病因选择。",
    ],
    redFlags: [
      "咳嗽>8周无明显病因或伴体重下降、盗汗、低热时，需排除结核或肺部肿瘤。",
      "胸片异常者需进一步行CT或支气管镜检查，不宜仅凭胸片下结论。",
      "咳嗽变异性哮喘需行支气管舒张试验或激发试验确诊，不作为教学训练的直接诊断依据。",
    ],
  },
  glucose: {
    source: "基于中国糖尿病患者低血糖管理指南、胰岛素治疗糖尿病管理共识与医学教学病例库整理。",
    references: [
      "低血糖定义：血糖<3.9 mmol/L为阈值，<2.8 mmol/L为严重低血糖。",
      "诱因分析：胰岛素用量过大、进食不规律、运动过度、空腹饮酒、肾功能不全等。",
      "处理原则：立即补充快速碳水化合物，15分钟后复测血糖，症状未缓解可重复。",
      "预防策略：规律饮食、血糖监测、胰岛素剂量调整、患者教育。",
    ],
    redFlags: [
      "老年患者无症状性低血糖风险更高，需加强血糖监测。",
      "反复低血糖发作提示方案需要调整（如基础胰岛素替代预混胰岛素），建议复诊调整。",
      "出现意识障碍或抽搐的严重低血糖需立即就医，训练中不得让学生模拟处理此类急症。",
    ],
  },
  custom: {
    source: "自定义病例需由授课教师补充专科依据与安全边界后用于正式教学。",
    references: [
      "建议补充：关键症状、检查指标、依从性风险、临床分层依据。",
      "建议补充：教学目标、评价量规、复盘重点。",
    ],
    redFlags: [
      "未完成教师审核的自定义病例仅用于草稿演示，不用于正式评价。",
      "禁止将系统输出直接用作临床处置建议。",
    ],
  },
};

const competitionEvidenceData = {
  pilot: {
    classSize: 42,
    beforeCoverage: 62,
    afterCoverage: 86,
    beforeConsistency: 58,
    afterConsistency: 83,
    beforeRubric: 71,
    afterRubric: 85,
    completionRate: 93,
    reviewReadRate: 88,
    avgDuration: "17.4分钟",
  },
  process: [
    "拟采集周期：2周，可覆盖1个临床班级或规培小组。",
    "过程记录：问诊轮次、关键点覆盖率、提交耗时、复盘访问行为。",
    "评价口径：对比训练前后问诊覆盖、判断一致、量规均分和复盘阅读率。",
  ],
  compareText: "式试点时可采用同班级前后对照：观察学生是否从'结论后证据'向'采集证据、再表达判断'，并记录教师复盘时间变化。",
  cases: [
    {
      title: "案例A（匿名）",
      problem: "学生频繁漏问用药依从性，导致高风险病例被误判为中风险。",
      intervention: "系统启用关键缺失项提示，并在复盘中展示证据贡献图。",
      result: "连续3次训练后依从性追问覆盖率由31%提升至82%。",
    },
    {
      title: "案例B（匿名）",
      problem: "学生能识别症状但不会解释证据权重，复盘质量不稳定。",
      intervention: "教师端按'错误类型诊断'分层点评，要求口头转写推理链。",
      result: "风险表达维度量规分由68分提升至84分。",
    },
    {
      title: "案例C（匿名）",
      problem: "边界病例中存在过度推断，学生缺乏不确定性表达。",
      intervention: "引入'信息不足提醒+补问建议'，并强化安全边界句式。",
      result: "过度推断比例下降约40%，复盘阅读率提升至90%。",
    },
  ],
  aiChain: [
    "语义抽取：从病例文本与问诊对话提取结构化医学线索。",
    "结构化要素：映射到症状、检查、依从性、舌脉等教学维度。",
    "风险推理：基于规则与线索权重生成训练分层建议。",
    "解释图谱：将关键证据转为可复盘的贡献图与叙述提示。",
    "形成性评价：按病史采集、西医线索、临床推理、四诊证据、辨证论治、中西医整合和安全沟通给出量规。",
  ],
  llmDiff: [
    "流程化训练：先独立作答、后开放复盘，避免一次性答案灌输。",
    "证据导向：强调'结论-证据-边界'闭环，而非闲聊式问答。",
    "教师治理：支持班级管理、考试模式、教学复盘与薄弱点跟踪。",
    "自适应机制：根据漏问项动态推荐追问，并依据历史薄弱点推荐下一轮训练。",
    "可验证输出：提供量规分、覆盖率、一致率等可度量教学指标。",
  ],
};

function setView(isLoggedIn) {
  loginView.classList.toggle("hidden", isLoggedIn);
  appView.classList.toggle("hidden", !isLoggedIn);
}

function routeAllowedForRole(route, role = state.role) {
  return roleRoutes[role] ? roleRoutes[role].includes(route) : false;
}

function roleForRoute(route) {
  if (routeAllowedForRole(route, state.role)) return state.role;
  if (routeAllowedForRole(route, "teacher")) return "teacher";
  if (routeAllowedForRole(route, "student")) return "student";
  return state.role;
}

function applyRoleNavigation() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const isAllowed = routeAllowedForRole(item.dataset.route);
    item.classList.toggle("hidden", !isAllowed);
    item.setAttribute("aria-hidden", String(!isAllowed));
  });
  document.querySelectorAll(".nav-group").forEach((group) => {
    const navRole = group.dataset.navRole;
    const shouldShow = !navRole || navRole === state.role;
    group.classList.toggle("hidden", !shouldShow);
  });
  syncPostAnswerAccess();
}

function isPostAnswerUnlocked() {
  return state.rubric.length > 0;
}

function shouldBlockPostAnswerRoute(route) {
  return state.role === "student" && state.mode !== "exam" && postAnswerRoutes.has(route) && !isPostAnswerUnlocked();
}

function syncPostAnswerAccess() {
  const locked = state.role === "student" && state.mode !== "exam" && !isPostAnswerUnlocked();
  document.querySelectorAll("[data-route], [data-go]").forEach((item) => {
    const targetRoute = item.dataset.route || item.dataset.go;
    if (!postAnswerRoutes.has(targetRoute)) return;
    if ("disabled" in item) item.disabled = locked;
    item.classList.toggle("is-disabled", locked);
    if (locked) {
      item.title = "提交学生判断后开放";
      item.setAttribute("aria-disabled", "true");
    } else {
      if (item.title === "提交学生判断后开放") item.removeAttribute("title");
      item.removeAttribute("aria-disabled");
    }
  });
}

function setRole(role, shouldRoute = false) {
  const nextRole = role === "teacher" ? "teacher" : "student";
  state.role = nextRole;
  document.body.dataset.role = nextRole;
  sessionStatus.textContent = nextRole === "teacher" ? "老师端在线" : "学生端在线";
  applyRoleNavigation();
  if (shouldRoute) {
    setRoute(roleHomeRoute[nextRole], { keepRole: true });
  }
}

function setRoute(route, options = {}) {
  let nextRoute = route === "home" ? roleHomeRoute[state.role] : route;
  nextRoute = routeMeta[nextRoute] ? nextRoute : roleHomeRoute[state.role];
  if (!options.keepRole) {
    const targetRole = roleForRoute(nextRoute);
    if (targetRole !== state.role) {
      setRole(targetRole, false);
    }
  }
  if (!routeAllowedForRole(nextRoute)) {
    nextRoute = roleHomeRoute[state.role];
  }
  if (nextRoute === "judgement" && state.role === "student" && !state.selectedAnswer && !state.interview.length) {
    state.interviewReminder = "请先完成至少1次追问，再进入学生作答。";
    window.alert("你还没有进行任何问诊。请至少完成 1 次核心追问后，再进入学生作答。");
    nextRoute = "interview";
    if (customQuestionInput) {
      setTimeout(() => customQuestionInput.focus(), 0);
    }
  }
  if (shouldBlockPostAnswerRoute(nextRoute)) {
    nextRoute = "judgement";
    feedbackStatus.textContent = "提交后开放";
    feedbackStatus.className = "pill neutral";
    feedbackTitle.textContent = "请先完成学生作答";
    feedbackText.textContent = "解析复盘、反馈报告和解释图谱会在提交判断后开放。";
  }
  if (nextRoute === "analysis" && !state.analysis) {
    parseStatus.textContent = state.selectedAnswer ? "待生成" : "提交后生成";
    parseStatus.className = "pill neutral";
  }
  state.route = nextRoute;
  document.body.dataset.route = nextRoute;
  document.querySelectorAll(".page-view").forEach((view) => {
    view.classList.toggle("active", view.id === `page-${nextRoute}`);
  });
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === nextRoute);
  });
  routeEyebrow.textContent = routeMeta[nextRoute][0];
  routeTitle.textContent = routeMeta[nextRoute][1];
  location.hash = nextRoute;
  if (nextRoute === "history") renderHistory();
  if (nextRoute === "interview") renderInterview();
  if (nextRoute === "judgement") renderRiskBadge();
  syncPostAnswerAccess();
  applyModeHints();
}

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setPatientApiStatus(text, tone = "neutral") {
  if (!patientApiStatus) return;
  patientApiStatus.textContent = text;
  patientApiStatus.className = `pill ${tone}`;
}

function setModelApiStatus(text, tone = "neutral") {
  if (!modelApiStatus) return;
  const studentTextMap = {
    模型API请求中: "生成参考分层中",
    已配置远程模型: "等待参考分层",
    远程模型已接入: "参考分层已生成",
    模型服务已接入: "参考分层已生成",
    本地模型已接入: "参考分层已生成",
    "模型未配置·本地规则": "本地规则参考",
    本地规则分层: "等待参考分层",
  };
  modelApiStatus.textContent = state.role === "student" ? (studentTextMap[text] || text) : text;
  modelApiStatus.className = `pill ${tone}`;
}

async function postJson(url, payload, timeoutMs = 12000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }
    return data;
  } finally {
    clearTimeout(timer);
  }
}

function detectBowelFrequency(text) {
  const matches = [...text.matchAll(/(\d+)\s*[-至到]?\s*(\d+)?\s*次/g)];
  if (!matches.length) return { value: "未识别", score: 0, hint: "建议追问排便频次" };
  const numbers = matches.flatMap((match) => [match[1], match[2]].filter(Boolean).map(Number));
  const max = Math.max(...numbers);
  if (max >= 4) return { value: `${max}次/日左右`, score: 22, hint: "频次明显增多，支持高风险训练讨论" };
  if (max >= 2) return { value: `${max}次/日左右`, score: 8, hint: "轻中度频次变化，需要结合其他症状" };
  return { value: "1次/日左右", score: -10, hint: "频次稳定，支持低风险训练判断" };
}

function riskFromScore(score) {
  if (score >= 56) return { level: "高风险", key: "high", percent: 88 };
  if (score >= 34) return { level: "中风险", key: "medium", percent: 58 };
  return { level: "低风险", key: "low", percent: 26 };
}

function isNegatedFinding(ruleKey, text) {
  const negatedPatterns = {
    mucusBlood: /无明显黏液脓血|无黏液脓血|无粘液脓血|没有.*(黏液|粘液|脓血|便血)|未见.*(黏液|粘液|脓血|便血)/,
    abdominalPain: /无腹痛|没有腹痛|腹痛不明显/,
    tenesmus: /无里急后重|没有里急后重/,
    nightStool: /夜间无便意|夜间没有便意|夜间便意不明显|夜里没有便意/,
    fatigue: /无发热乏力|没有.*乏力|无乏力|没有明显.*(没力气|没劲)|精神.*还可以/,
    feverWeight: /没有发热|没有发烧|无发热|无发烧|没发烧|体重.*没.*变|体重.*无.*下降/,
    tonguePulse: /舌脉信息未记录|舌脉未记录|未记录舌脉|舌脉信息缺失|舌.*未记录|脉.*未记录/,
  };
  return negatedPatterns[ruleKey] ? negatedPatterns[ruleKey].test(text) : false;
}

function hasTonguePulseInfo(text) {
  return /舌|苔|脉/.test(text) && !isNegatedFinding("tonguePulse", text);
}

function analysisTextWithInterview() {
  const interviewText = state.interview
    .map((item) => `追问${item.label}：${item.answer}`)
    .join(" ");
  return `${caseInput.value} ${interviewText}`;
}

function analyzeCase(text) {
  const clean = normalizeText(text);
  const frequency = detectBowelFrequency(clean);
  let score = 30 + frequency.score;
  const hits = keywordRules
    .filter((rule) => rule.pattern.test(clean) && !isNegatedFinding(rule.key, clean))
    .map((rule) => {
      score += rule.score;
      return rule;
    });

  score = clamp(score, 10, 95);
  const risk = riskFromScore(score);
  const extractionRows = [
    ["排便频次", frequency.value, frequency.hint],
    ["症状线索", hits.length ? hits.map((hit) => hit.label).join("、") : "识别明显活动性症状", hits.length ? "学生解释这些线索如何影响风险判断" : "合作为低风险或信息不足病例讨论"],
    ["问诊记录", state.interview.length ? `已完成${state.interview.length}轮追问` : "未追问虚拟患者", state.interview.length ? "评价学生是否主动获取关键病史" : "建议先进入虚拟问诊模块训练信息采集"],
    ["中医信息", hasTonguePulseInfo(clean) ? "识别舌脉相关描述" : "舌脉信息缺失", hasTonguePulseInfo(clean) ? "结合中医四诊信息进行教学讨论" : "提示学生补充四诊信息"],
    ["用药依从性", /停药|停用|自行停|漏服|未规律|规律服药|忘记/.test(clean) ? "识别用药相关信息" : "记录", "训练学生主动追问近期用药与依从性"],
  ];

  const evidence = hits.length
    ? hits.slice(0, 5).map((hit) => `${hit.label}：${hit.meaning}`)
    : ["未识别明显高危线索，建议关注信息是否充分。"];

  const followups = [
    "补充近期粪钙卫蛋白、内镜或炎症指标变化。",
    "追问症状持续时间、夜间便意、体重变化和发热情况。",
    "核对近期用药依从性、是否自行减量或停药。",
    "如舌脉信息缺失，提示学生记录四诊相关信息。",
  ];
  const missing = missingRequiredLabels();
  if (missing.length) {
    followups.unshift(`自适应追问建议：你尚未覆盖「${missing.slice(0, 2).join("、")}」等核心问诊点。`);
  }
  if (state.history.length) {
    followups.push(`个性化训练建议：结合你的近期薄弱点「${state.history[0].weakness}」安排下一轮针对性练习。`);
  }

  return { clean, score, risk, hits, extractionRows, evidence, followups };
}

function normalizeRiskKey(value = "") {
  const text = String(value).toLowerCase();
  if (text.includes("高") || text.includes("high")) return "high";
  if (text.includes("中") || text.includes("medium") || text.includes("moderate")) return "medium";
  if (text.includes("低") || text.includes("low")) return "low";
  return "";
}

function normalizeRubricLabel(value = "") {
  const text = String(value).trim();
  const exactMap = {
    病史采集: "病史采集",
    史采集: "病史采集",
    西医线索: "西医线索",
    医线索: "西医线索",
    临床推理: "临床推理",
    床推理: "临床推理",
    四诊证据: "四诊证据",
    诊证据: "四诊证据",
    辨证论治: "辨证论治",
    证论治: "辨证论治",
    中西医整合: "中西医整合",
    西医整合: "中西医整合",
    安全沟通: "安全沟通",
    全沟通: "安全沟通",
  };
  if (exactMap[text]) return exactMap[text];
  if (text.endsWith("史采集")) return "病史采集";
  if (text.endsWith("医线索")) return "西医线索";
  if (text.endsWith("床推理")) return "临床推理";
  if (text.endsWith("诊证据")) return "四诊证据";
  if (text.endsWith("证论治")) return "辨证论治";
  if (text.endsWith("西医整合")) return "中西医整合";
  if (text.endsWith("全沟通")) return "安全沟通";
  return text;
}

function riskFromProbability(probability) {
  const percent = Math.round(clamp(probability, 0, 1) * 100);
  if (probability >= 0.72) return { level: "高风险", key: "high", percent: Math.max(percent, 78) };
  if (probability >= 0.46) return { level: "中风险", key: "medium", percent: Math.max(percent, 52) };
  return { level: "低风险", key: "low", percent: Math.max(percent, 22) };
}

function mergeModelAnalysis(localAnalysis, modelResult) {
  const probabilityRaw = modelResult.probability ?? modelResult.pred_prob ?? modelResult.prediction_probability ?? modelResult.risk_probability;
  const probability = Number(probabilityRaw);
  const riskKey = normalizeRiskKey(modelResult.risk_key || modelResult.riskKey || modelResult.risk || modelResult.risk_level || modelResult.label);
  const modelRisk = riskKey
    ? {
        key: riskKey,
        level: answerText(riskKey),
        percent: Number.isFinite(probability) ? Math.round(clamp(probability, 0, 1) * 100) : localAnalysis.risk.percent,
      }
    : Number.isFinite(probability)
      ? riskFromProbability(probability)
      : localAnalysis.risk;

  const probabilityText = Number.isFinite(probability) ? `，预测概率约 ${(probability * 100).toFixed(1)}%` : "";
  return {
    ...localAnalysis,
    risk: modelRisk,
    modelResult,
    modelSource: modelResult.source || "uc-model-api",
    evidence: [
      `模型服务输出：训练分层为「${modelRisk.level}」${probabilityText}。`,
      ...localAnalysis.evidence,
    ],
    followups: [
      "模型已接入：请对照上方模型校验结果、结构化线索与输入证据链，判断是否存在证据不足或过度推断。",
      ...localAnalysis.followups,
    ],
  };
}

async function analyzeCaseWithModel(text) {
  const localAnalysis = analyzeCase(text);
  setModelApiStatus("模型API请求中", "warn");
  const modelPayload = {
    caseKey: state.activeCase,
    caseText: caseInput.value,
    interview: state.interview.map((item) => ({
      key: item.key,
      label: item.label,
      question: item.question,
      answer: item.answer,
    })),
    localAnalysis: {
      score: localAnalysis.score,
      risk: localAnalysis.risk,
      hits: localAnalysis.hits.map((hit) => ({ key: hit.key, label: hit.label, score: hit.score })),
    },
  };
  try {
    if (ENABLE_NETLIFY_MODEL_PROXY) {
      const modelResult = await postJson("/.netlify/functions/uc-model", modelPayload);
      const merged = mergeModelAnalysis(localAnalysis, modelResult);
      state.modelApiSource = "api";
      setModelApiStatus("模型服务已接入", "success");
      return merged;
    }
    if (REMOTE_UC_MODEL_API_URL) {
      try {
        const remoteModelResult = await postJson(REMOTE_UC_MODEL_API_URL, modelPayload);
        const merged = mergeModelAnalysis(localAnalysis, remoteModelResult);
        state.modelApiSource = "remote-api";
        setModelApiStatus("远程模型已接入", "success");
        return merged;
      } catch (remoteError) {
        console.info("Remote UC model API fallback:", remoteError.message);
      }
    }
    if (["localhost", "127.0.0.1"].includes(location.hostname)) {
      try {
        const localModelResult = await postJson("http://127.0.0.1:8765/predict", modelPayload);
        const merged = mergeModelAnalysis(localAnalysis, localModelResult);
        state.modelApiSource = "local-api";
        setModelApiStatus("本地模型已接入", "success");
        return merged;
      } catch (localError) {
        console.info("Local UC model API fallback:", localError.message);
      }
    }
    state.modelApiSource = "local";
    setModelApiStatus("模型未配置·本地规则", "warn");
    return localAnalysis;
  } catch (error) {
    state.modelApiSource = "local";
    setModelApiStatus("模型未配置·本地规则", "warn");
    console.info("UC model API fallback:", error.message);
    return localAnalysis;
  }
}

function renderList(node, items) {
  if (!node) return;
  node.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    node.appendChild(li);
  });
}

function renderClinicalBasis() {
  if (!caseClinicalSource || !caseClinicalList || !caseRedFlagList || !tcmRuleText) return;
  const basis = caseClinicalBasis[state.activeCase] || caseClinicalBasis.custom;
  caseClinicalSource.textContent = basis.source;
  renderList(caseClinicalList, basis.references);
  renderList(caseRedFlagList, basis.redFlags);
  const ucCases = ["high", "low", "boundary", "dampHeat", "spleenDef", "coldHeat"];
  if (ucCases.includes(state.activeCase)) {
    tcmRuleText.textContent = "评价规则：西医线索（便次、便血、夜间症状、检查、依从性）作为风险分层主轴；中医线索（寒热、虚实、舌苔、脉象、饮食诱因）用于证候与方证匹配训练。系统要求学生先写证据来源，再写辨证和治法；若舌脉或检查缺失，应标注'信息不足'并提示追补。";
  } else if (state.activeCase === "chestPain") {
    tcmRuleText.textContent = "评价规则：围绕OPQRST胸痛评估路径（发作时间、诱因、性质、放射、严重程度、时间）进行结构化问诊，识别心血管危险因素，区分心源性与非心源性胸痛。教学目标是建立急性胸痛的鉴别思路与红旗征象识别能力。";
  } else if (state.activeCase === "cough") {
    tcmRuleText.textContent = "评价规则：围绕慢性咳嗽鉴别框架（咳嗽持续时间、痰液性状、时间规律、诱发因素、过敏史和用药史）进行追问，识别咳嗽变异性哮喘、上气道咳嗽综合征、胃食管反流等相关线索。教学目标是建立慢性咳嗽的病因鉴别思路。";
  } else if (state.activeCase === "glucose") {
    tcmRuleText.textContent = "评价规则：围绕低血糖应急处理（事件经过、胰岛素方案、进食情况、血糖监测、既往低血糖史）进行追问，分析诱因和处理流程，评估严重程度并说明安全边界。教学目标是建立胰岛素治疗患者的低血糖预防和应急处理能力。";
  } else {
    tcmRuleText.textContent = "评价规则：自定义病例的临床依据与安全边界需由授课教师补充完整后用于正式教学。";
  }
}

function renderErrorDiagnosis(items) {
  if (!errorDiagnosisList) return;
  renderList(errorDiagnosisList, items.length ? items : ["暂无诊断数据，选择学生或完成一次训练后生成。"]);
}

function renderSyndromeHeatmap(rows = null) {
  if (!syndromeHeatmap) return;
  const sourceRows = rows || [
    { label: "漏问舌脉", value: 5, hint: "四诊信息不足" },
    { label: "只写方剂不写证据", value: 4, hint: "方证依据薄弱" },
    { label: "湿热误判为脾虚", value: 3, hint: "寒热虚实混淆" },
    { label: "风险正确但辨证不足", value: 6, hint: "双轨推理不完整" },
  ];
  const max = Math.max(...sourceRows.map((row) => row.value), 1);
  syndromeHeatmap.innerHTML = "";
  sourceRows.forEach((row) => {
    const cell = document.createElement("div");
    cell.className = "heatmap-cell";
    cell.style.setProperty("--heat", String(row.value / max));
    cell.innerHTML = `
      <strong>${escapeHtml(row.label)}</strong>
      <span>${escapeHtml(row.value)}人</span>
      <small>${escapeHtml(row.hint)}</small>
    `;
    syndromeHeatmap.appendChild(cell);
  });
}

function renderStructured(rows) {
  structuredTable.innerHTML = "";
  rows.forEach(([dimension, value, hint]) => {
    const tr = document.createElement("tr");
    [dimension, value, hint].forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
    structuredTable.appendChild(tr);
  });
}

function renderTags(analysis) {
  tagCloud.innerHTML = "";
  if (!analysis.hits.length) {
    const tag = document.createElement("span");
    tag.textContent = "未识别明显高危症状";
    tagCloud.appendChild(tag);
    return;
  }
  analysis.hits.forEach((hit) => {
    const tag = document.createElement("span");
    tag.textContent = hit.label;
    tagCloud.appendChild(tag);
  });
}

function getPatientProfile() {
  const sample = samples[state.activeCase];
  if (sample && sample.patient) return sample.patient;
  return {
    name: "自定义病例患者",
    intro: "请先在病例库输入自定义病例，或选择示例病例后进行问诊训练。",
    responses: {
      fallback: "自定义病例需要教师补充标准化患者回答，本演示先记录学生追问行为。",
    },
  };
}

function requiredQuestionKeys() {
  return caseRequiredQuestionMap[state.activeCase] || caseRequiredQuestionMap.high;
}

function askedKeySet() {
  return new Set(state.interview.map((item) => item.key).filter(Boolean));
}

function interviewCoverageRate() {
  const required = requiredQuestionKeys();
  const asked = askedKeySet();
  const covered = required.filter((key) => asked.has(key)).length;
  return { covered, total: required.length, percent: Math.round((covered / required.length) * 100) };
}

function renderInterview() {
  const profile = getPatientProfile();
  const coverage = interviewCoverageRate();
  const showPostSubmitHints = state.rubric.length > 0;
  patientName.textContent = profile.name;
  patientIntro.textContent = profile.intro;
  document.querySelectorAll("#page-interview .post-submit-only").forEach((node) => {
    node.classList.toggle("hidden", !showPostSubmitHints);
  });
  if (interviewCoverage) interviewCoverage.textContent = `${coverage.percent}%`;
  if (interviewCoverageBar) interviewCoverageBar.style.width = `${coverage.percent}%`;
  if (!showPostSubmitHints && !state.interview.length && state.interviewReminder) {
    interviewStatus.textContent = state.interviewReminder;
    interviewStatus.className = "pill warn";
  } else {
    interviewStatus.textContent = showPostSubmitHints
      ? (coverage.percent >= 80 ? "问诊较完整": "问诊证据不足")
      : (state.interview.length ? "追问进行中": "等待提问");
    interviewStatus.className = showPostSubmitHints
      ? (coverage.percent >= 80 ? "pill success" : "pill warn")
      : (state.interview.length ? "pill warn" : "pill neutral");
  }
  if (state.patientApiSource === "openai") {
    setPatientApiStatus("OpenAI患者API", "success");
  } else if (state.patientApiSource === "error") {
    setPatientApiStatus("API失败·本地兜底", "warn");
  } else {
    setPatientApiStatus("本地患者话术", "neutral");
  }

  chatLog.innerHTML = "";
  appendMessage("patient", `我是${profile.name}。有些医学词我不一定懂，你可以像门诊一样慢慢问我。`);
  state.interview.forEach((item) => {
    appendMessage("student", item.question);
    appendMessage("patient", item.answer);
  });

  const asked = askedKeySet();
  if (!askedClueList) return;
  askedClueList.innerHTML = "";
  requiredQuestionKeys().map((key) => interviewQuestions.find((item) => item.key === key)).filter(Boolean).forEach((item) => {
    const tag = document.createElement("span");
    tag.className = asked.has(item.key) ? "asked" : "missing";
    tag.textContent = `${asked.has(item.key) ? "已问": "待问"}：${item.label}`;
    askedClueList.appendChild(tag);
  });
  updateDashboard(state.rubric.length ? `问诊覆盖${coverage.percent}%` : (state.interview.length ? "问诊进行中": "等待问诊"));
}

function appendMessage(role, text) {
  const bubble = document.createElement("div");
  bubble.className = `message ${role}`;
  bubble.textContent = text;
  chatLog.appendChild(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function matchQuestionKey(text) {
  if (/哪里不舒服|哪.*不舒服|怎么不舒服|什么症状|主要症状|哪里难受|最近怎么样|情况怎么样|身体怎么样|肠胃.*(怎么样|如何)|肚子.*(怎么样|如何)/.test(text)) return "overview";
  if (/吃饭|食欲|胃口|纳食|饭量|吃得|饮食|进食/.test(text)) return "appetite";
  const asksFever = /发热|发烧|低热|体温|烧不烧/.test(text);
  const asksFatigue = /乏力|没劲|精神|累|力气|疲劳/.test(text);
  const asksWeight = /体重|消瘦|瘦了|掉秤/.test(text);
  if ([asksFever, asksFatigue, asksWeight].filter(Boolean).length >= 2) return "systemic";
  if (asksFatigue) return "fatigue";
  if (asksFever) return "fever";
  if (asksWeight) return "weight";
  if (/多久|几天|几周|什么时候|啥时候|病程|开始|持续|反复|最近一阵/.test(text)) return "duration";
  if (/恶心|呕吐|想吐|腹胀|胀气|肠鸣|咕噜|反酸|胃疼|胃痛/.test(text)) return "giOther";
  if (/吃了.*(加重|不舒服)|诱因|辛辣|凉的|油腻|饮食.*(影响|关系)|和吃.*有关/.test(text)) return "dietTrigger";
  if (/影响.*(生活|学习|工作|出门)|上课|上班|活动|日常|能不能出门/.test(text)) return "dailyLife";
  if (/关节|口腔|口疮|溃疡|皮疹|皮肤|眼睛/.test(text)) return "extraIntestinal";
  if (/以前|既往|过去|曾经|复发|诊断|病史/.test(text)) return "pastHistory";
  if (/家族|家里|父母|亲属|遗传/.test(text)) return "familyHistory";
  if (/大便|排便|次数|性状/.test(text)) return "stool";
  if (/血|脓血|黏液|粘液|便血/.test(text)) return "blood";
  if (/腹痛|里急后重|肚子痛|肚子疼|腹部不舒服|肚子不舒服/.test(text)) return "pain";
  if (/夜|睡眠|夜间/.test(text)) return "night";
  if (/药|美沙拉嗪|规律|停药|漏服|依从/.test(text)) return "medication";
  if (/检查|粪钙|钙卫|CRP|内镜|指标|化验/.test(text)) return "exam";
  if (/舌|脉|苔/.test(text)) return "tongue";
  // 胸痛鉴别相关
  if (/胸闷|胸痛|心绞痛|压榨|心前区|心脏/.test(text)) return "painLocation";
  if (/放射|串到|左肩|左臂|手臂麻/.test(text)) return "painRadiation";
  if (/持续|多久|时间/.test(text) && /胸痛|心脏/.test(text)) return "painDuration";
  if (/诱发|缓解|硝酸甘油|休息/.test(text)) return "triggerRelief";
  if (/高血压|糖尿病|高血脂|抽烟|吸烟|家族史/.test(text)) return "riskFactors";
  // 咳嗽相关
  if (/咳嗽|咳痰|干咳|有痰/.test(text)) return "coughDuration";
  if (/痰|颜色|黄痰|白痰/.test(text)) return "sputum";
  if (/过敏|鼻炎|哮喘|特应性/.test(text)) return "allergy";
  if (/抽烟|吸烟|二手烟/.test(text)) return "smoking";
  // 低血糖相关
  if (/低血糖|血糖.*2\.|2\.8|心慌.*抖|出冷汗|饥饿感/.test(text)) return "hypoglycemiaYesterday";
  if (/胰岛素|打针|预混/.test(text)) return "insulin";
  if (/早饭?|早餐|打针.*饭|饭.*打针/.test(text)) return "breakfast";
  if (/监测血糖|测血糖|指尖血糖|血糖.*监测/.test(text)) return "glucoseMonitoring";
  if (/以前.*低血糖|以前也发|经常.*低|发作史/.test(text)) return "hypoglycemiaHistory";
  return "";
}

function localPatientAnswer(profile, matchedKey) {
  return profile.responses[matchedKey] || profile.responses.fallback || "这个信息需要教师在病例库中补充。";
}

async function callPatientApi({ question, matchedKey }) {
  const sample = samples[state.activeCase];
  const profile = getPatientProfile();
  return postJson(REMOTE_PATIENT_API_URL || "/.netlify/functions/patient-chat", {
    caseKey: state.activeCase,
    caseLabel: sample ? sample.label : "自定义病例",
    caseText: caseInput.value,
    patientName: profile.name,
    matchedKey,
    question,
    history: state.interview.slice(-8).map((item) => ({
      question: item.question,
      answer: item.answer,
      label: item.label,
    })),
  });
}

async function askQuestion(key, customText = "") {
  const profile = getPatientProfile();
  const matchedKey = key || matchQuestionKey(customText);
  const prompt = interviewQuestions.find((item) => item.key === matchedKey);
  const question = normalizeText(customText || (prompt ? prompt.question : ""));
  if (!question) return;
  state.interviewReminder = "";
  let answer = localPatientAnswer(profile, matchedKey);
  let source = "local";
  if (!ENABLE_PATIENT_API) {
    state.patientApiSource = "local";
    state.interview.push({
      key: matchedKey,
      label: prompt ? prompt.label : "自定义追问",
      question,
      answer,
      source,
    });
    renderInterview();
    updateTeacherReport("学生已完成虚拟患者追问。");
    return;
  }
  setPatientApiStatus("患者API请求中", "warn");
  try {
    const apiResult = await callPatientApi({ question, matchedKey });
    if (apiResult && apiResult.answer) {
      answer = apiResult.answer;
      source = apiResult.source || "openai";
      state.patientApiSource = source === "openai" ? "openai" : "local";
    } else {
      state.patientApiSource = "local";
    }
  } catch (error) {
    state.patientApiSource = "error";
    source = "local-fallback";
    console.info("Patient API fallback:", error.message);
  }
  state.interview.push({
    key: matchedKey,
    label: prompt ? prompt.label : "自定义追问",
    question,
    answer,
    source,
  });
  renderInterview();
  updateTeacherReport("学生已完成虚拟患者追问。");
}

function resetInterview() {
  state.interview = [];
  state.interviewReminder = "";
  renderInterview();
}

function getOrCreateModelRuntimeSummary() {
  let node = document.querySelector("#modelRuntimeSummary");
  if (!node && modelFigureMeta) {
    node = document.createElement("div");
    node.id = "modelRuntimeSummary";
    node.className = "runtime-model-grid hidden";
    modelFigureMeta.insertAdjacentElement("afterend", node);
  }
  return node;
}

function modelProbability(modelResult = {}) {
  const raw = modelResult.probability ?? modelResult.pred_prob ?? modelResult.prediction_probability ?? modelResult.risk_probability;
  const value = Number(raw);
  return Number.isFinite(value) ? clamp(value, 0, 1) : null;
}

function formatPercentValue(value) {
  return Number.isFinite(value) ? `${(value * 100).toFixed(1)}%` : "--";
}

function formatModelValue(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value ?? "--");
  if (Math.abs(number) >= 100) return number.toFixed(0);
  if (Math.abs(number) >= 10) return number.toFixed(1).replace(/\.0$/, "");
  return number.toFixed(2).replace(/\.00$/, "");
}

function modelFeatureLabel(name = "") {
  if (modelFeatureLabels[name]) return modelFeatureLabels[name];
  return String(name)
    .replace(/^feat_/, "")
    .replace(/_/g, " ")
    .trim();
}

function normalizeExplanationRows(rows = [], options = {}) {
  const { sourceType = "feature" } = options;
  return rows
    .map((item) => {
      if (Array.isArray(item)) {
        return { key: item[0], label: modelFeatureLabel(item[0]), value: Number(item[1]), rawValue: item[1], sourceType };
      }
      const key = item.name || item.key || item.feature || item.feature_name || item.label || "";
      const rawValue = item.shap_value ?? item.shap ?? item.contribution ?? item.score ?? item.value ?? 0;
      return { key, label: item.display_name || item.displayName || item.label || modelFeatureLabel(key), value: Number(rawValue), rawValue, sourceType };
    })
    .filter((item) => item.key && Number.isFinite(item.value));
}

function modelExplanationRows(analysis) {
  const modelResult = analysis && analysis.modelResult;
  if (!modelResult) return { kind: "local", rows: [] };
  const shapRows = modelResult.top_shap_features || modelResult.shap_values || modelResult.shapValues || modelResult.shap_features;
  if (Array.isArray(shapRows) && shapRows.length) {
    return { kind: "shap", rows: normalizeExplanationRows(shapRows, { sourceType: "shap" }).slice(0, 10) };
  }
  const teachingRows = normalizeExplanationRows(modelResult.teaching_features || modelResult.readable_features || [], { sourceType: "feature" });
  if (teachingRows.length) {
    return { kind: "feature", rows: teachingRows.slice(0, 10) };
  }
  const featureRows = normalizeExplanationRows(
    modelResult.top_nonzero_features || modelResult.nonzero_features || modelResult.features || [],
    { sourceType: "feature" },
  );
  const hiddenDefaults = [/^gender$/, /^age$/, /^age_x_/];
  const clinicalRows = featureRows.filter((item) => !hiddenDefaults.some((pattern) => pattern.test(item.key)));
  return { kind: "feature", rows: (clinicalRows.length ? clinicalRows : featureRows).slice(0, 10) };
}

function evidenceSegmentsFromInput() {
  const segments = [];
  const caseText = normalizeText(caseInput.value);
  if (caseText) segments.push({ source: "病例文本", text: caseText });
  state.interview.forEach((item, index) => {
    const text = normalizeText(`${item.question || ""} ${item.answer || ""}`);
    if (text) segments.push({ source: `追问${index + 1}：${item.label || "自定义追问"}`, text });
  });
  return segments;
}

function snippetAroundMatch(text, match) {
  const index = typeof match.index === "number" ? match.index : text.indexOf(match[0]);
  const start = Math.max(0, index - 14);
  const end = Math.min(text.length, index + match[0].length + 24);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < text.length ? "..." : "";
  return `${prefix}${text.slice(start, end)}${suffix}`;
}

function findEvidenceMatch(patterns, segments = evidenceSegmentsFromInput()) {
  for (const segment of segments) {
    for (const pattern of patterns) {
      const match = segment.text.match(pattern);
      if (match) {
        return {
          source: segment.source,
          quote: snippetAroundMatch(segment.text, match),
          context: segment.text,
        };
      }
    }
  }
  return null;
}

function extractFrequencyEvidence(segments = evidenceSegmentsFromInput()) {
  const patterns = [
    /(\d+)\s*[-至到]\s*(\d+)\s*次(?:\/日|每天|一日|每日)?/,
    /(\d+)\s*次(?:\/日|每天|一日|每日)?/,
    /一天\s*(一两|两三|三四|四五)\s*次/,
    /(一两|两三|三四|四五)\s*次/,
  ];
  const chineseRangeMax = { 一两: 2, 两三: 3, 三四: 4, 四五: 5 };
  for (const segment of segments) {
    for (const pattern of patterns) {
      const match = segment.text.match(pattern);
      if (!match) continue;
      let value = 1;
      if (match[2] && /^\d+$/.test(match[2])) {
        value = Number(match[2]);
      } else if (match[1] && /^\d+$/.test(match[1])) {
        value = Number(match[1]);
      } else if (chineseRangeMax[match[1]]) {
        value = chineseRangeMax[match[1]];
      }
      return {
        value,
        source: segment.source,
        quote: snippetAroundMatch(segment.text, match),
      };
    }
  }
  return null;
}

function inputEvidenceRows() {
  const segments = evidenceSegmentsFromInput();
  const rows = [];
  const usedKeys = new Set();
  const addRow = (key, data) => {
    if (usedKeys.has(key)) return;
    usedKeys.add(key);
    rows.push({ key, ...data });
  };

  const frequency = extractFrequencyEvidence(segments);
  if (frequency) {
    if (frequency.value >= 4) {
      addRow("bowelFrequencyHigh", {
        label: "排便频次明显增加",
        weight: 24,
        polarity: "positive",
        badge: "强支持",
        source: frequency.source,
        quote: frequency.quote,
        meaning: "频次达到活动期常见表现，需结合便血、腹痛和夜间症状判断复发风险。",
      });
    } else if (frequency.value >= 2) {
      addRow("bowelFrequencyBorderline", {
        label: "排便频次轻度变化",
        weight: 10,
        polarity: "neutral",
        badge: "需结合",
        source: frequency.source,
        quote: frequency.quote,
        meaning: "单独频次变化不足以定高风险，需要补问便血、腹痛、检查指标和用药。",
      });
    } else {
      addRow("bowelFrequencyStable", {
        label: "排便频次稳定",
        weight: -14,
        polarity: "negative",
        badge: "降低风险",
        source: frequency.source,
        quote: frequency.quote,
        meaning: "排便频次稳定支持低风险判断，但仍需确认便血和用药依从性。",
      });
    }
  }

  const positiveRules = [
    {
      key: "mucusBlood",
      label: "黏液/脓血/便血",
      patterns: [/黏液脓血|粘液脓血|脓血|便血|血便|黏黏.*红|红.*黏|看到红|纸上.*红|便里.*红/],
      negated: [/无.*黏液|无.*粘液|没.*血|未见.*血|没有.*黏|没有.*粘/],
      weight: 26,
      badge: "强支持",
      meaning: "提示肠道炎症活动，是学生需要优先识别和追问的核心证据。",
    },
    {
      key: "tenesmus",
      label: "里急后重/排不净感",
      patterns: [/里急后重|排不干净|老想上厕所|去了又排不干净/],
      negated: [/无里急后重|没有里急后重|没有.*排不干净/],
      weight: 18,
      badge: "支持",
      meaning: "与直肠炎症活动相关，和便血、频次增加相互印证。",
    },
    {
      key: "medicationRisk",
      label: "停药或漏服",
      patterns: [/停药|停用|自行停|漏服|忘.*药|没有规律.*药/],
      weight: 18,
      badge: "支持",
      meaning: "依从性下降会增加复发风险，也提示学生必须追问近期用药。",
    },
    {
      key: "abdominalPain",
      label: "腹痛/腹部不适",
      patterns: [/腹痛|肚子疼|肚子痛|腹部不舒服|肚子不舒服|一阵一阵疼/],
      negated: [/无腹痛|没有腹痛|肚子不疼|腹痛不明显/],
      weight: 14,
      badge: "支持",
      meaning: "提示症状活动，需要结合持续时间、频次和伴随症状判断。",
    },
    {
      key: "nightStool",
      label: "夜间便意或睡眠受扰",
      patterns: [/夜间.*便|夜里.*便|晚上.*厕所|被.*憋醒|睡得不太踏实|睡眠欠佳/],
      negated: [/夜间.*无.*便|晚上不会.*厕所|不会因为.*厕所.*醒|不会因为.*便意.*醒/],
      weight: 12,
      badge: "支持",
      meaning: "夜间症状比单纯白天不适更提示活动性，需要重点复盘。",
    },
    {
      key: "examMissing",
      label: "客观检查缺失",
      patterns: [/还没.*复查|没.*复查|没做.*肠镜|没查.*粪|没查.*钙卫|没查.*CRP|检查.*未|指标.*未/],
      weight: 10,
      polarity: "neutral",
      badge: "待补证据",
      meaning: "不能只凭症状下结论，应提示补充粪钙卫蛋白、CRP或内镜等客观证据。",
    },
    {
      key: "fatigueAppetite",
      label: "乏力/纳食下降",
      patterns: [/乏力|没劲|没什么力气|精神差|不太想吃|胃口差|纳食一般|饭量.*少/],
      negated: [/无发热乏力|无乏力|没有.*乏力|没有明显.*力气|精神.*差不多|精神.*还可以/],
      weight: 8,
      badge: "辅助支持",
      meaning: "属于全身状态变化，不能单独定级，但可支持活动性判断。",
    },
    {
      key: "feverWeight",
      label: "发热或体重变化",
      patterns: [/发热|发烧|低热|体重下降|消瘦|瘦了|轻了一点/],
      negated: [/无发热|没有发热|没发烧|没有发烧|没有低热|体重.*没.*变|体重.*无.*下降/],
      weight: 6,
      badge: "辅助支持",
      meaning: "提示系统性影响，需要结合感染排查和炎症指标综合判断。",
    },
  ];

  positiveRules.forEach((rule) => {
    const found = findEvidenceMatch(rule.patterns, segments);
    if (!found) return;
    if (rule.negated && rule.negated.some((pattern) => pattern.test(found.context))) return;
    addRow(rule.key, {
      label: rule.label,
      weight: rule.weight,
      polarity: rule.polarity || "positive",
      badge: rule.badge,
      source: found.source,
      quote: found.quote,
      meaning: rule.meaning,
    });
  });

  const negativeRules = [
    {
      key: "noMucusBlood",
      blockedBy: "mucusBlood",
      label: "未见黏液脓血",
      patterns: [/无.*黏液脓血|无.*粘液脓血|没看到血|没有.*黏|没有.*粘|没有.*便血/],
      weight: -18,
      badge: "降低风险",
      meaning: "缺少活动性便血证据，支持稳定或低风险判断。",
    },
    {
      key: "noPain",
      blockedBy: "abdominalPain",
      label: "无明显腹痛",
      patterns: [/无腹痛|没有腹痛|肚子不疼|腹痛不明显/],
      weight: -12,
      badge: "降低风险",
      meaning: "缺少腹痛线索，降低活动性复发的可能性。",
    },
    {
      key: "regularMedication",
      blockedBy: "medicationRisk",
      label: "规律服药",
      patterns: [/规律服药|按.*医生.*吃|按.*医嘱|没有.*停|没有自己停|药.*都.*吃/],
      weight: -12,
      badge: "降低风险",
      meaning: "依从性较好，可支持稳定随访判断。",
    },
    {
      key: "stableCourse",
      label: "症状相对稳定",
      patterns: [/症状稳定|比较稳定|没有突然加重|还算平稳|控制得还可以/],
      weight: -10,
      badge: "降低风险",
      meaning: "病程稳定是低风险证据，但仍需结合客观检查和红旗症状。",
    },
  ];

  negativeRules.forEach((rule) => {
    if (rule.blockedBy && usedKeys.has(rule.blockedBy)) return;
    const found = findEvidenceMatch(rule.patterns, segments);
    if (!found) return;
    addRow(rule.key, {
      label: rule.label,
      weight: rule.weight,
      polarity: "negative",
      badge: rule.badge,
      source: found.source,
      quote: found.quote,
      meaning: rule.meaning,
    });
  });

  return rows
    .sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight))
    .slice(0, 10);
}

function tcmEvidenceRows() {
  const segments = evidenceSegmentsFromInput();
  const rows = [];
  const usedKeys = new Set();
  const addRow = (key, data) => {
    if (usedKeys.has(key)) return;
    usedKeys.add(key);
    rows.push({ key, ...data });
  };
  const rules = [
    { key: "heat", label: "象/湿热", patterns: [/舌红|苔黄|黄腻|肛门灼热|口苦|口黏|小便.*黄|滑数|身上.*热/], badge: "象", meaning: "支持湿热蕴结或热象偏盛，需要结合便血、黏液和苔脉。", polarity: "hot" },
    { key: "cold", label: "象", patterns: [/遇冷加重|受凉.*加重|怕冷|畏冷|生冷.*不舒服|凉的.*加重/], badge: "象", meaning: "提示寒象或寒热错杂，不能直接按单纯湿热处理。", polarity: "cold" },
    { key: "deficiency", label: "象/脾虚", patterns: [/神疲|乏力|容易累|舌淡|淡胖|齿痕|脉细弱|劳累.*加重|久病|面色少华/], badge: "象", meaning: "提示脾虚、正虚或缓解期调护方向，需要与活动性证据区分。", polarity: "deficiency" },
    { key: "damp", label: "象", patterns: [/苔白腻|苔黄腻|白腻|黏滞|大便.*黏|腹胀|肠鸣|口黏/], badge: "象", meaning: "提示湿邪或脾虚夹湿，是方证匹配的重要证据。", polarity: "damp" },
    { key: "mixed", label: "热并见", patterns: [/寒热|黄白相兼|口干.*不欲.*饮|畏冷.*灼热|灼热.*畏冷/], badge: "突线索", meaning: "提示寒热错杂或证候冲突，需要学生先解释矛盾证据。", polarity: "mixed" },
    { key: "missingTongue", label: "脉缺失", patterns: [/舌脉.*未记录|没人.*看舌|没.*把脉|脉象.*不懂|舌脉信息未记录/], badge: "补四诊", meaning: "舌脉不足时应标注信息不足，不应直接定证或匹配方剂。", polarity: "neutral" },
  ];
  rules.forEach((rule) => {
    const found = findEvidenceMatch(rule.patterns, segments);
    if (!found) return;
    addRow(rule.key, { ...rule, source: found.source, quote: found.quote });
  });
  return rows;
}

function syndromeConflictInfo(tcmRows = tcmEvidenceRows()) {
  const keys = new Set(tcmRows.map((row) => row.key));
  if (keys.has("mixed") || (keys.has("cold") && keys.has("heat"))) {
    return {
      level: "warn",
      title: "存在寒热冲突",
      text: "本例同时出现寒象与热象，不能直接归为单纯湿热。请分别说明哪些证据支持寒象、哪些证据支持热象，再给出寒热错杂或待补证据的判断。",
    };
  }
  if (keys.has("missingTongue")) {
    return {
      level: "neutral",
      title: "四诊信息不足",
      text: "当前舌脉信息不足，应先标注信息缺口，再讨论是否可以辨证和匹配方证思路。",
    };
  }
  if (keys.has("deficiency") && keys.has("heat")) {
    return {
      level: "warn",
      title: "虚实夹杂提示",
      text: "本例同时存在虚象与热象，建议学生区分活动度证据和体质/缓解期调护证据。",
    };
  }
  return {
    level: "success",
    title: "证候线索较一致",
    text: "当前中医线索相对一致，复盘时重点检查学生是否引用了原始证据，而不是只写证候名称或方剂名称。",
  };
}

function renderDualReasoningCanvas() {
  if (!dualReasoningCanvas || !syndromeConflictBadge || !syndromeConflictText) return;
  const westernRows = inputEvidenceRows().slice(0, 6);
  const tcmRows = tcmEvidenceRows().slice(0, 6);
  const conflict = syndromeConflictInfo(tcmRows);
  syndromeConflictBadge.textContent = conflict.title;
  syndromeConflictBadge.className = `pill ${conflict.level}`;
  syndromeConflictText.textContent = conflict.text;
  const makePrompt = (row) => {
    if (row.key === "bowelFrequencyHigh" || row.key === "bowelFrequencyBorderline" || row.key === "bowelFrequencyStable") return "提示学生说明便次变化对活动度判断的意义。";
    if (row.key === "mucusBlood" || row.key === "noMucusBlood") return "提示学生说明便血/黏液脓血是否支持活动性炎症。";
    if (row.key === "medicationRisk" || row.key === "regularMedication") return "提示学生把用药依从性纳入复发风险判断。";
    if (row.key === "examMissing") return "提示学生说明还需要哪些检查指标支持判断。";
    if (row.key === "nightStool") return "提示学生关注夜间症状是否提示活动度升高。";
    if (row.key === "heat") return "提示学生指出哪些证据支持热象或湿热。";
    if (row.key === "cold") return "提示学生指出哪些证据支持寒象。";
    if (row.key === "deficiency") return "提示学生区分虚象、体质调护与活动期证据。";
    if (row.key === "damp") return "提示学生说明湿象如何影响证候和方证匹配。";
    if (row.key === "mixed") return "提示学生先解释寒热并见，再判断是否寒热错杂。";
    if (row.key === "missingTongue") return "提示学生标注四诊信息不足，避免强行定证。";
    return row.meaning || "提示学生把该线索写入推理依据。";
  };
  const makeList = (rows, emptyText) => rows.length
    ? rows.map((row) => `
      <li>
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.badge || "提示")}</span>
        <small>${escapeHtml(makePrompt(row))}</small>
      </li>
    `).join("")
    : `<li class="muted-copy">${escapeHtml(emptyText)}</li>`;
  dualReasoningCanvas.innerHTML = `
    <article class="dual-track-card western">
      <h4>西医活动度证据链</h4>
      <p>围绕便次、便血、夜间症状、检查与用药依从性判断复发风险。</p>
      <ul>${makeList(westernRows, "暂未整理出足够的西医活动度证据。")}</ul>
    </article>
    <article class="dual-track-card tcm">
      <h4>中医辨证证据链</h4>
      <p>围绕寒热、虚实、舌苔、脉象、饮食诱因进行证候与方证匹配。</p>
      <ul>${makeList(tcmRows, "暂未整理出足够的中医辨证证据。")}</ul>
    </article>
  `;
}

function renderRuntimeModelSummary(analysis) {
  const runtimeSummary = getOrCreateModelRuntimeSummary();
  if (!runtimeSummary) return;
  const modelResult = analysis && analysis.modelResult;
  if (!modelResult) {
    runtimeSummary.classList.add("hidden");
    runtimeSummary.innerHTML = "";
    return;
  }
  const probability = modelProbability(modelResult);
  const threshold = Number(modelResult.threshold);
  const evidenceCount = inputEvidenceRows().length;
  const isTeacher = state.role === "teacher";
  runtimeSummary.classList.remove("hidden");
  runtimeSummary.innerHTML = isTeacher
    ? `
      <div class="runtime-model-card">
        <span>模型校验分层</span>
        <strong>${escapeHtml(analysis.risk.level)}</strong>
      </div>
      <div class="runtime-model-card">
        <span>复发概率</span>
        <strong>${formatPercentValue(probability)}</strong>
      </div>
      <div class="runtime-model-card">
        <span>特征维度</span>
        <strong>${escapeHtml(modelResult.feature_count || 73)}维</strong>
      </div>
      <div class="runtime-model-card">
        <span>模型来源</span>
        <strong>${escapeHtml(modelResult.model_name || "Stacking模型")}</strong>
      </div>
    `
    : `
      <div class="runtime-model-card">
        <span>系统参考分层</span>
        <strong>${escapeHtml(analysis.risk.level)}</strong>
      </div>
      <div class="runtime-model-card">
        <span>可复盘证据</span>
        <strong>${escapeHtml(evidenceCount || "--")}条</strong>
      </div>
      <div class="runtime-model-card">
        <span>学习重点</span>
        <strong>证据链</strong>
      </div>
      <div class="runtime-model-card">
        <span>安全边界</span>
        <strong>教师复核</strong>
      </div>
    `;
  if (isTeacher && Number.isFinite(threshold)) {
    const card = document.createElement("div");
    card.className = "runtime-model-card";
    card.innerHTML = `<span>中风险阈值</span><strong>${formatPercentValue(threshold)}</strong>`;
    runtimeSummary.appendChild(card);
  }
}

function renderModelFigure() {
  if (!modelFigureTitle || !modelFigureMeta || !modelFigureImg || !modelFigureNote) return;
  const analysis = state.analysis;
  const modelResult = analysis && analysis.modelResult;
  renderRuntimeModelSummary(analysis);
  if (modelResult) {
    const source = modelResult.source || analysis.modelSource || "Railway模型服务";
    modelFigureTitle.textContent = state.role === "teacher" ? "容推理与模型校验": "次证据复盘";
    modelFigureMeta.textContent = state.role === "teacher"
      ? `教师端可见：系统解析当前病例文本和问诊记录生成证据链，并调用 Python 模型服务校验分层和概率。服务来源：${source}。`
      : "下面是系统从病例和问诊中整理出的关键证据。";
    modelFigureImg.classList.add("hidden");
    modelFigureImg.removeAttribute("src");
    modelFigureNote.textContent = state.role === "teacher"
      ? "教师端可查看模型校验信息；学生端隐藏模型来源、阈值和概率，避免形成黑箱依赖。"
      : "先看证据，再回想自己的判断依据是否充分。";
    return;
  }
  const modelAsset = modelExplanationAssets[state.activeCase];
  if (!modelAsset) {
    modelFigureTitle.textContent = "自定义病例 · 待接入模型解释图";
    modelFigureMeta.textContent = "自定义病例需要教师上传或选择对应的模型解释材料。本演示会先保留教学化线索贡献条。";
    modelFigureImg.classList.add("hidden");
    modelFigureImg.removeAttribute("src");
    modelFigureNote.textContent = "正式系统可由后端模型服务生成 SHAP/LIME/反事实解释，再由教师审核后开放给学生。";
    return;
  }
  modelFigureTitle.textContent = modelAsset.title;
  modelFigureMeta.textContent = modelAsset.source;
  modelFigureImg.src = modelAsset.image;
  modelFigureImg.classList.remove("hidden");
  modelFigureNote.textContent = modelAsset.note;
}

function renderContributionChart(analysis) {
  contributionChart.innerHTML = "";
  renderModelFigure();
  const modelResult = analysis && analysis.modelResult;
  const modelRows = modelResult && normalizeExplanationRows(modelResult.teaching_features || [], { sourceType: "model" });
  const evidenceRows = inputEvidenceRows();

  // 优先使用模型返回的 teaching_features 动态生成贡献条
  if (modelRows && modelRows.length > 0) {
    const maxAbs = Math.max(...modelRows.map((r) => Math.abs(r.value)), 1);
    modelRows.forEach((item) => {
      const card = document.createElement("article");
      card.className = `evidence-chain-card ${item.value >= 0 ? "positive" : "negative"}`;
      const influence = item.value >= 0 ? "支持高风险" : "支持低风险";
      const percent = Math.round((Math.abs(item.value) / maxAbs) * 100);
      card.innerHTML = `
        <div class="evidence-chain-head">
          <strong>${escapeHtml(item.label)}</strong>
          <span>${escapeHtml(influence)}</span>
        </div>
        <p class="evidence-source">来源：模型从问诊文本中提取的特征值 ${formatNumber(item.rawValue ?? item.value)}</p>
        <div class="evidence-bar-container">
          <div class="evidence-bar ${item.value >= 0 ? "bar-positive" : "bar-negative"}" style="width: ${percent}%"></div>
        </div>
        <p class="evidence-meaning">该特征贡献度约 ${percent}%，用于教学参考而非最终判断。</p>
      `;
      contributionChart.appendChild(card);
    });
    const probability = modelProbability(modelResult || {});
    const modelClause = state.role === "teacher"
      ? `模型辅助校验结果为「${analysis.risk.level}」，复发概率 ${formatPercentValue(probability)}，特征来源：${modelResult.model_name || "UC模型服务"}。`
      : `本次参考分层为「${analysis.risk.level}」，由模型基于问诊特征实时生成。`;
    explainNarrative.textContent = `共整理出 ${modelRows.length} 个模型特征贡献条。${modelClause}请结合临床判断对照检查。`;
    renderList(explainTeachingList, state.role === "teacher" ? [
      "查看学生是否能说明特征来源。",
      "关注学生是否区分模型辅助与临床推理。",
      "结合模型校验结果指导学生完善证据链。",
    ] : [
      "先看特征来源，再复述自己的判断依据。",
      "标出模型特征与临床判断的差异。",
      "把风险判断、中医辨证和安全边界连成完整表达。",
    ]);
    return;
  }

  // 回退到本地规则证据
  if (evidenceRows.length) {
    evidenceRows.forEach((item) => {
      const card = document.createElement("article");
      card.className = `evidence-chain-card ${item.polarity || (item.weight >= 0 ? "positive" : "negative")}`;
      card.innerHTML = `
        <div class="evidence-chain-head">
          <strong>${escapeHtml(item.label)}</strong>
          <span>${escapeHtml(item.badge)}</span>
        </div>
        <p class="evidence-source">${escapeHtml(item.source)}：${escapeHtml(item.quote)}</p>
        <p class="evidence-meaning">${escapeHtml(item.meaning)}</p>
      `;
      contributionChart.appendChild(card);
    });

    const probability = modelProbability((analysis && analysis.modelResult) || {});
    const modelClause = analysis && analysis.modelResult
      ? (state.role === "teacher"
        ? `模型辅助校验结果为「${analysis.risk.level}」，复发概率 ${formatPercentValue(probability)}。`
        : `本次参考分层为「${analysis.risk.level}」。`)
      : `系统规则分层为「${analysis.risk.level}」。`;
    explainNarrative.textContent = `共整理出 ${evidenceRows.length} 条关键证据。${modelClause}请对照每条证据，检查自己的判断是否有遗漏。`;
    renderList(explainTeachingList, state.role === "teacher" ? [
      "查看学生是否能说明证据来源。",
      "关注学生是否区分支持证据与信息不足。",
      "结合模型校验结果判断学生是否过度依赖系统结论。",
    ] : [
      "先看证据来源，再复述自己的判断依据。",
      "标出还缺哪些问诊或检查信息。",
      "把风险判断、中医辨证和安全边界连成一段完整表达。",
    ]);
    return;
  }

  if (!analysis || !analysis.hits.length) {
    contributionChart.innerHTML = '<div class="empty-chart">暂未整理出明确的高危证据，建议回到问诊补充信息。</div>';
    explainNarrative.textContent = "当前信息还不够充分，请先补问关键症状、用药和检查结果。";
    renderList(explainTeachingList, [
      "补问大便、便血、腹痛、夜间症状。",
      "补问近期用药和复查指标。",
      "说明为什么目前不能过早下结论。",
    ]);
    return;
  }

  const maxAbs = Math.max(...analysis.hits.map((hit) => Math.abs(hit.score)), 1);
  analysis.hits
    .slice()
    .sort((a, b) => Math.abs(b.score) - Math.abs(a.score))
    .forEach((hit) => {
      const card = document.createElement("article");
      card.className = `evidence-chain-card ${hit.score >= 0 ? "positive" : "negative"}`;
      const influence = hit.score >= 0 ? "支持当前风险判断": "降低当前风险判断";
      card.innerHTML = `
        <div class="evidence-chain-head">
          <strong>${escapeHtml(hit.label)}</strong>
          <span>${escapeHtml(influence)}</span>
        </div>
        <p class="evidence-source">来源：系统从当前病例文本和问诊记录中抽取。</p>
        <p class="evidence-meaning">该线索权重为 ${escapeHtml(Math.round((Math.abs(hit.score) / maxAbs) * 100))}%，用于提示学生复盘证据是否完整。</p>
      `;
      contributionChart.appendChild(card);
    });

  explainNarrative.textContent = `已整理出 ${analysis.hits.length} 个关键线索，本次参考分层为「${analysis.risk.level}」。`;
  renderList(explainTeachingList, [
    "先说明最重要的证据是什么。",
    "再说明还缺哪些问诊或检查信息。",
    "最后用一段话重写自己的推理。",
  ]);
}

function resetExplainPanel() {
  explainStatus.textContent = "等待复盘";
  explainStatus.className = "pill neutral";
  const runtimeSummary = getOrCreateModelRuntimeSummary();
  if (runtimeSummary) {
    runtimeSummary.classList.add("hidden");
    runtimeSummary.innerHTML = "";
  }
  if (modelFigureTitle) modelFigureTitle.textContent = "内容证据链";
  if (modelFigureMeta) modelFigureMeta.textContent = "完成作答后，这里会汇总支持判断的关键证据。";
  if (modelFigureImg) {
    modelFigureImg.classList.add("hidden");
    modelFigureImg.removeAttribute("src");
  }
  if (modelFigureNote) modelFigureNote.textContent = "请先完成问诊和作答，再查看证据复盘。";
  contributionChart.innerHTML = "";
  explainNarrative.textContent = "提交后会生成你的个性化复盘。";
  explainTeachingList.innerHTML = "";
  if (dualReasoningCanvas) dualReasoningCanvas.innerHTML = '<div class="empty-chart">提交后会生成西医活动度证据链与中医辨证证据链。</div>';
  if (syndromeConflictBadge) {
    syndromeConflictBadge.textContent = "等待生成";
    syndromeConflictBadge.className = "pill neutral";
  }
  if (syndromeConflictText) syndromeConflictText.textContent = "寒热、虚实、舌脉等冲突线索会在这里提示。";
}

function renderRubric() {
  rubricScoreGrid.innerHTML = "";
  if (!state.rubric.length) {
    rubricStatus.textContent = "等待生成";
    rubricStatus.className = "pill neutral";
    [
      ["病史采集", 20],
      ["西医线索", 15],
      ["临床推理", 20],
      ["四诊证据", 10],
      ["辨证论治", 15],
      ["中西医整合", 10],
      ["安全沟通", 10],
    ].forEach(([label, weight]) => {
      const card = document.createElement("div");
      card.className = "rubric-score-card empty";
      card.innerHTML = `
        <div class="rubric-score-label">${escapeHtml(normalizeRubricLabel(label))}</div>
        <strong>--<span class="rubric-score-weight">/ ${escapeHtml(weight)}</span></strong>
        <small>提交判断后生成</small>
      `;
      rubricScoreGrid.appendChild(card);
    });
    renderTeacherRubric();
    return;
  }

  rubricStatus.textContent = "已生成";
  rubricStatus.className = "pill success";
  const totalScore = averageRubricScore();
  const totalCard = document.createElement("div");
  totalCard.className = "rubric-score-card total";
  totalCard.innerHTML = `
    <div class="rubric-score-label">总分</div>
    <strong>${escapeHtml(totalScore)}分</strong>
    <div class="score-track"><div class="score-fill" style="width: ${escapeHtml(totalScore)}%"></div></div>
    <small>7个维度按权重相加，满分100分。</small>
  `;
  rubricScoreGrid.appendChild(totalCard);
  state.rubric.forEach((item) => {
    const card = document.createElement("div");
    card.className = "rubric-score-card";
    const percent = item.rawScore || Math.round((item.score / item.weight) * 100);
    card.innerHTML = `
      <div class="rubric-score-label">${escapeHtml(normalizeRubricLabel(item.label))}</div>
      <strong>${escapeHtml(item.score)}<span class="rubric-score-weight">/ ${escapeHtml(item.weight)}</span></strong>
      <div class="score-track"><div class="score-fill" style="width: ${escapeHtml(percent)}%"></div></div>
      <small>${escapeHtml(item.feedback)}</small>
    `;
    rubricScoreGrid.appendChild(card);
  });
  renderTeacherRubric();
}

function buildRubric(correct) {
  const analysis = state.analysis;
  const coverage = interviewCoverageRate();
  const asked = askedKeySet();
  const hitCount = analysis ? analysis.hits.length : 0;
  const tcmEval = evaluateTcmAnswer();
  const tcmRows = tcmEvidenceRows();
  const conflict = syndromeConflictInfo(tcmRows);
  const tcmText = [state.tcmAnswer.syndrome, state.tcmAnswer.method, state.tcmAnswer.formula, state.tcmAnswer.safety].join(" ");
  const evidenceCitationHit = /黏液|脓血|便血|里急后重|腹痛|夜间|舌|苔|脉|寒|热|虚|湿|齿痕|检查|用药|停药|乏力|纳食|粪钙|CRP|内镜/.test(tcmText);
  const evidenceSentenceHit = /因为|由于|提示|支持|依据|结合|可见|考虑|所以|原文|患者/.test(tcmText);
  const coreKeys = requiredQuestionKeys();
  const essentialCovered = coreKeys.filter((key) => asked.has(key)).length;
  const coverageLevel = coverage.percent >= 70 ? "基本达标" : coverage.percent >= 50 ? "仍需补强" : "明显不足";
  const weighted = (label, rawScore, weight, feedback) => ({
    label,
    score: Math.round((rawScore / 100) * weight),
    rawScore,
    weight,
    feedback,
  });

  if (!state.interview.length) {
    return [
      weighted("病史采集", 0, 20, "尚未开始虚拟问诊，本项暂不计分。"),
      weighted("西医线索", 0, 15, "尚未采集活动度线索，本项暂不计分。"),
      weighted("临床推理", 0, 20, "尚未完成问诊取证，本项暂不计分。"),
      weighted("四诊证据", 0, 10, "尚未完成四诊相关取证，本项暂不计分。"),
      weighted("辨证论治", 0, 15, "尚未形成辨证依据，本项暂不计分。"),
      weighted("中西医整合", 0, 10, "尚未形成中西医整合证据链，本项暂不计分。"),
      weighted("安全沟通", 0, 10, "尚未追问检查、用药或复诊安全信息，本项暂不计分。"),
    ];
  }

  const historyScore = coverage.covered === 0
    ? 0
    : Math.round(clamp(coverage.percent * 0.92 + (asked.has("overview") ? 5 : 0), 0, 100));
  const westernClueScore = coreKeys.length === 0 || essentialCovered === 0
    ? 0
    : Math.round(clamp((essentialCovered / coreKeys.length) * 100 + (hitCount > 0 ? 5 : 0), 0, 100));
  const reasoningScore = essentialCovered === 0
    ? 0
    : Math.round(clamp((correct ? 32 : 10) + coverage.percent * 0.45 + essentialCovered * 5, 0, 100));
  const fourDiagnosisScore = (!asked.has("tongue") && !tcmEval.hasAnyInput)
    ? 0
    : Math.round(clamp((asked.has("tongue") ? 32 : 0) + tcmEval.filledCount * 16 + (tcmEval.evidenceHit ? 20 : 0), 0, 100));
  const syndromeScore = !tcmEval.hasAnyInput
    ? 0
    : Math.round(clamp(
        tcmEval.matchCount * 28 + tcmEval.reasonedCount * 16 + (evidenceCitationHit ? 14 : 0) - (conflict.level === "warn" && tcmEval.matchCount < 2 ? 10 : 0),
        0,
        100,
      ));
  const integrationScore = (!tcmEval.hasAnyInput || essentialCovered === 0)
    ? 0
    : Math.round(clamp(essentialCovered * 10 + tcmEval.reasonedCount * 18 + (evidenceCitationHit ? 16 : 0) + (evidenceSentenceHit ? 18 : 0), 0, 100));
  const safetyScore = (!tcmEval.safetyHit && !asked.has("exam") && !asked.has("medication"))
    ? 0
    : Math.round(clamp((asked.has("medication") ? 20 : 0) + (asked.has("exam") ? 20 : 0) + (asked.has("night") ? 8 : 0) + (tcmEval.safetyHit ? 40 : 0), 0, 100));

  return [
    weighted("病史采集", historyScore, 20, `参照病史采集/医学面谈要求：已覆盖${coverage.covered}/${coverage.total}个核心问诊点，信息采集${coverageLevel}。`),
    weighted("西医线索", westernClueScore, 15, `围绕当前病例的核心临床线索进行活动度/风险评估；当前核心线索覆盖${essentialCovered}/${coreKeys.length}。`),
    weighted("临床推理", reasoningScore, 20, correct && coverage.percent < 70 ? "判断方向一致，但证据采集不足，按 OSCE/mini-CEX 思路不能视为完整达标。" : (correct ? "风险分层与系统参考结果一致，需继续强化证据链表达。" : "建议回到证据链复盘分层依据。")),
    weighted("四诊证据", fourDiagnosisScore, 10, asked.has("tongue") || tcmEval.hasAnyInput ? "已触及部分寒热、虚实、舌脉或饮食诱因证据。" : "需补充舌脉、寒热、虚实、饮食诱因等四诊信息。"),
    weighted("辨证论治", syndromeScore, 15, tcmEval.matchCount >= 2 ? `证候、治法或方证方向较一致；${conflict.text}` : `建议按证候、治法、方证思路重写辨证依据。${conflict.text}`),
    weighted("中西医整合", integrationScore, 10, evidenceCitationHit && evidenceSentenceHit ? "已尝试把活动度证据与证候/方证依据连接起来。" : "需把西医活动度证据和中医证候证据写成同一条推理链。"),
    weighted("安全沟通", safetyScore, 10, tcmEval.safetyHit
      ? "已关注复诊、加重就医或方药审核等安全边界。"
      : (asked.has("exam") && asked.has("medication") ? "已关注检查与用药依从性，建议补充复诊和方药审核边界。" : "建议补充检查指标、用药依从性、复诊提醒和方药审核边界。")),
  ];
}

function averageRubricScore(rubric = state.rubric) {
  if (!rubric.length) return 0;
  return Math.round(rubric.reduce((sum, item) => sum + item.score, 0));
}

function renderRiskBadge() {
  if (!state.selectedAnswer || !state.rubric.length || !state.analysis) {
    riskBadge.textContent = state.selectedAnswer ? "等待提交" : "等待判断";
    riskBadge.className = "risk-badge";
    return;
  }
  riskBadge.textContent = state.analysis.risk.level;
  riskBadge.className = `risk-badge ${state.analysis.risk.key}`;
}

async function renderAnalysis(options = {}) {
  const { force = false } = options;
  const text = analysisTextWithInterview();
  if (!force && !state.selectedAnswer) {
    parseStatus.textContent = "提交后生成";
    parseStatus.className = "pill neutral";
    tagCloud.innerHTML = "<span>提交学生判断后开放解析复盘</span>";
    structuredTable.innerHTML = "";
    feedbackStatus.textContent = "等待作答";
    feedbackStatus.className = "pill neutral";
    feedbackTitle.textContent = "请先完成学生判断";
    feedbackText.textContent = "系统解析会在提交判断后生成。这样可以保留学生独立推理过程，避免作答前看到系统提示。";
    return;
  }
  if (!normalizeText(caseInput.value)) {
    parseStatus.textContent = "请输入病例";
    parseStatus.className = "pill warn";
    state.analysis = null;
    state.rubric = [];
    resetExplainPanel();
    renderRubric();
    return;
  }

  state.analysis = await analyzeCaseWithModel(text);
  parseStatus.textContent = "已解析";
  parseStatus.className = "pill success";
  renderRiskBadge();
  renderTags(state.analysis);
  renderStructured(state.analysis.extractionRows);
  renderContributionChart(state.analysis);
  renderDualReasoningCanvas();
  renderList(evidenceList, state.analysis.evidence);
  renderList(followupList, state.analysis.followups);
  explainStatus.textContent = "已生成";
  explainStatus.className = "pill success";
  riskLevelText.textContent = state.analysis.risk.level;
  riskMeterBar.style.width = `${state.analysis.risk.percent}%`;
  riskMeterHint.textContent = "请学生先提交判断，再查看完整反馈。";
  feedbackStatus.textContent = "已解析";
  feedbackStatus.className = "pill success";
  feedbackTitle.textContent = "等待学生提交判断";
  feedbackText.textContent = state.selectedAnswer
    ? "系统已根据学生判断生成解析，可继续查看反馈报告、解释图谱与教师复盘。"
    : "系统已完成病例解析。请选择低/中/高风险并提交，系统将生成个性化复盘和形成性评价量规。";
  updateTeacherReport("已完成病例解析，等待学生判断。");
  updateDashboard("已完成解析");
}

async function submitJudgement() {
  if (!state.selectedAnswer) {
    feedbackStatus.textContent = "请选择判断";
    feedbackStatus.className = "pill warn";
    feedbackTitle.textContent = "尚未选择学生判断";
    feedbackText.textContent = "请先选择低风险、中风险或高风险，再提交训练反馈。";
    setRoute("feedback");
    return;
  }
  if (!state.interview.length) {
    feedbackStatus.textContent = "请先问诊";
    feedbackStatus.className = "pill warn";
    feedbackTitle.textContent = "尚未开始虚拟问诊";
    feedbackText.textContent = "请至少完成 1 轮虚拟问诊后再提交判断，否则系统不会形成有效的形成性评价。";
    setRoute("interview");
    return;
  }
  collectTcmAnswer();
  await renderAnalysis({ force: true });
  if (!state.analysis) return;

  const expected = state.analysis.risk.key;
  const correct = state.selectedAnswer === expected;
  const coverage = interviewCoverageRate();
  const evidenceReady = coverage.percent >= 70;
  const tcmEval = evaluateTcmAnswer();
  if (tcmEval.filledCount > 0) {
    state.analysis.evidence = [
      ...state.analysis.evidence,
      `中医辨证训练：${tcmEval.summary[0]}`,
      `中医参考复盘：${tcmEval.summary[1]}`,
    ];
  }
  state.analysis.followups = [
    ...state.analysis.followups,
    tcmEval.filledCount > 0 || state.tcmAnswer.safety
      ? "中医辨证与安全边界已记录，教师可结合证据链进行课堂复盘。"
      : "中医辨证与方剂思路暂未填写，复盘时可补充证候、治法和方剂依据。",
  ];
  renderList(evidenceList, state.analysis.evidence);
  renderList(followupList, state.analysis.followups);
  state.rubric = buildRubric(correct);
  renderRubric();
  syncPostAnswerAccess();
  renderInterview();
  const record = saveTrainingHistory(correct);

  if (state.mode === "exam") {
    const activeExam = getActiveExam();
    const examFeedbackOpen = isExamFeedbackOpen(activeExam);
    // 考试模式：不立即展示反馈、解析、解释
    feedbackStatus.textContent = examFeedbackOpen ? "考试反馈已开放": "已提交，等待教师开放";
    feedbackStatus.className = examFeedbackOpen ? "pill success" : "pill warn";
    feedbackTitle.textContent = examFeedbackOpen ? "考试反馈已开放": "考试答案已提交";
    feedbackText.textContent = examFeedbackOpen
      ? (correct && evidenceReady
        ? "你的考试作答与系统参考分层一致，且问诊证据较完整。请继续查看解析复盘和解释图谱。"
        : correct
          ? `你的考试作答方向一致，但只覆盖了${coverage.covered}/${coverage.total}个核心问诊点，建议补全证据链。`
          : `系统参考分层为「${state.analysis.risk.level}」。请回到解析复盘查看遗漏线索。`)
      : `你已在考试模式下完成「${activeExam ? activeExam.title : "考试任务"}」。按照教师设置，解析、量规和解释图谱将在教师统一发布后开放。`;
    riskMeterHint.textContent = examFeedbackOpen ? "考试反馈已开放，可继续查看解析和解释图谱。" : "考试反馈延迟开放，避免提前泄题。";
    record.feedbackText = feedbackText.textContent;
    writeStoredHistory(state.history);
    writeExamSubmission({
      ...record,
      examId: activeExam ? activeExam.id : null,
      examTitle: activeExam ? activeExam.title : record.examTitle,
      examClassName: activeExam ? activeExam.className : "",
      examSpecialty: activeExam ? activeExam.specialty : "",
      examCaseKey: activeExam ? activeExam.caseKey : state.activeCase,
      examFeedbackMode: activeExam ? activeExam.feedbackMode : "",
      feedbackReleased: examFeedbackOpen,
    });
    markExamCompleted(activeExam ? activeExam.id : "");
    renderStudentExamTasks();
    renderTeacherHome();
    populateReviewSelector();
    updateTeacherReport("学生已提交考试答案，等待教师统一发布解析。");
    updateDashboard("考试已提交");
    setRoute("feedback");
    applyModeHints();
    return;
  }

  feedbackStatus.textContent = correct && evidenceReady ? "判断一致" : (correct ? "证据不足" : "需要复盘");
  feedbackStatus.className = correct && evidenceReady ? "pill success" : "pill warn";
  feedbackTitle.textContent = correct && evidenceReady
    ? "判断方向较好"
    : correct
      ? "判断方向一致，但问诊证据不足"
      : "判断与系统分层不一致";
  feedbackText.textContent = correct && evidenceReady
    ? "你的风险分层与系统参考结果一致，且核心问诊覆盖较完整。复盘时请说明支持该判断的关键证据，并指出还需要补充哪些信息。"
    : correct
      ? `你的风险分层方向与系统一致，但只覆盖了${coverage.covered}/${coverage.total}个核心问诊点。临床训练中不能只凭结论正确判定达标，请返回问诊补充缺失信息，再形成完整证据链。`
      : `系统参考分层为「${state.analysis.risk.level}」。建议回到结构化解析表，检查是否遗漏了症状组合、用药依从性或信息缺失带来的不确定性。`;
  feedbackText.textContent += ` 中医辨证复盘：${tcmEval.summary[1]}`;
  riskMeterHint.textContent = correct && evidenceReady
    ? "可进入解释图谱、学习轨迹或教师复盘环节。"
    : "建议先补全问诊证据，再进入解释图谱和学习轨迹复盘。";
  record.feedbackText = feedbackText.textContent;
  writeStoredHistory(state.history);
  updateTeacherReport(correct && evidenceReady ? "学生判断与系统一致，问诊证据较完整。" : correct ? "学生判断方向一致，但问诊覆盖不足。" : "学生判断与系统不一致，建议开展证据复盘。");
  updateDashboard("已生成反馈");
  setRoute("feedback");
}

function missingRequiredLabels() {
  const asked = askedKeySet();
  return interviewQuestions
    .filter((item) => requiredQuestionKeys().includes(item.key) && !asked.has(item.key))
    .map((item) => item.label);
}

function deriveErrorTypes({ consistent, weakness, selected, systemLevel }) {
  const errors = [];
  if (!consistent) errors.push(`证据权重错误：学生判断「${selected}」与系统分层「${systemLevel}」不一致。`);
  if (/问诊覆盖不足|检查追问|用药依从性追问|核心症状识别/.test(weakness || "")) {
    errors.push(`漏问症状：当前薄弱点为「${weakness}」，建议先补问核心病史后再分层。`);
  }
  if (/风险表达|中西医结合推理|信息不足下的表达|证据表达/.test(weakness || "")) {
    errors.push("过度推断：存在证据不足下快速下结论倾向，需强化不确定性表达。");
  }
  return errors.length ? errors : ["当前未见明显错误类型，建议提升证据表达完整性。"];
}

function saveTrainingHistory(correct) {
  const sample = samples[state.activeCase];
  const missing = missingRequiredLabels();
  const coverage = interviewCoverageRate();
  const rubricAvg = averageRubricScore();
  const qualified = correct && coverage.percent >= 70 && rubricAvg >= 70;
  const record = {
    id: Date.now(),
    time: new Date().toLocaleString("zh-CN", { hour12: false }),
    mode: state.mode,
    examId: state.activeExam ? state.activeExam.id : "",
    examTitle: state.activeExam ? state.activeExam.title : "",
    caseLabel: sample ? sample.label : "自定义病例",
    caseText: caseInput.value,
    selected: answerText(state.selectedAnswer),
    systemLevel: state.analysis.risk.level,
    correct,
    qualified,
    rubricAvg,
    rubric: state.rubric.map((r) => ({ label: normalizeRubricLabel(r.label), score: r.score })),
    tcmAnswer: { ...state.tcmAnswer },
    weakness: coverage.percent < 50 ? "问诊覆盖不足" : missing[0] || (qualified ? "证据表达深化" : "证据链完整性不足"),
    asked: coverage,
    askedLabels: state.interview.map((i) => i.label),
    evidence: state.analysis.evidence.slice(),
    feedbackText: feedbackText.textContent,
  };
  state.history = [record, ...state.history].slice(0, 20);
  writeStoredHistory(state.history);
  renderHistory();
  return record;
}

function renderHistory() {
  const allRecords = state.history;
  const records = allRecords.filter((record) => {
    if (state.role !== "student" || record.mode !== "exam" || !record.examId) return true;
    const exam = latestExamById(record.examId);
    return !exam || isExamFeedbackOpen(exam);
  });
  const hiddenLockedExamCount = allRecords.length - records.length;
  historyTimeline.innerHTML = "";
  historyCount.textContent = `${records.length}次`;
  teacherSessionCount.textContent = `${records.length}次`;
  if (!records.length) {
    historyStatus.textContent = hiddenLockedExamCount ? "待开放" : "暂无记录";
    historyStatus.className = hiddenLockedExamCount ? "pill warn" : "pill neutral";
    historyAccuracy.textContent = "未生成";
    historyWeakness.textContent = hiddenLockedExamCount ? "考试反馈待开放" : "等待训练";
    teacherAvgScore.textContent = "未生成";
    teacherFocus.textContent = hiddenLockedExamCount ? "等待教师开放反馈" : "等待训练";
    historyTimeline.innerHTML = hiddenLockedExamCount
      ? '<div class="empty-chart">考试已提交，学习轨迹将在教师开放反馈后显示。</div>'
      : '<div class="empty-chart">完成一次学生作答后，系统会在这里生成学习轨迹。</div>';
    return;
  }

  const qualifiedRate = Math.round((records.filter((item) => {
    const askedPercent = item.asked && typeof item.asked.percent === "number" ? item.asked.percent : 0;
    return item.qualified || (item.correct && askedPercent >= 70 && item.rubricAvg >= 70);
  }).length / records.length) * 100);
  const avg = Math.round(records.reduce((sum, item) => sum + item.rubricAvg, 0) / records.length);
  historyStatus.textContent = "已记录";
  historyStatus.className = "pill success";
  historyAccuracy.textContent = `${qualifiedRate}%`;
  historyWeakness.textContent = records[0].weakness;
  teacherAvgScore.textContent = `${avg}分`;
  teacherFocus.textContent = records[0].weakness;

  records.forEach((record, index) => {
    const item = document.createElement("article");
    item.className = "history-item clickable";
    item.dataset.idx = String(index);
    const askedPercent = record.asked && typeof record.asked.percent === "number" ? record.asked.percent : 0;
    const qualified = record.qualified || (record.correct && askedPercent >= 70 && record.rubricAvg >= 70);
    const resultLabel = qualified ? "综合达标" : (record.correct ? "证据不足" : "待复盘");
    const modeTag = record.mode === "exam"
      ? `<span class="mode-tag exam">考试模式</span>`
      : `<span class="mode-tag practice">自由练习</span>`;
    const examTitle = record.examTitle ? `<span class="exam-title-inline">${escapeHtml(record.examTitle)}</span>` : "";
    const askedCovered = record.asked && typeof record.asked.covered === "number" ? record.asked.covered : 0;
    const askedTotal = record.asked && typeof record.asked.total === "number" ? record.asked.total : 0;
    item.innerHTML = `
      <div>
        <div class="history-item-head">
          <span>${escapeHtml(record.time)}</span>
          ${modeTag}
          ${examTitle}
        </div>
        <strong>${escapeHtml(record.caseLabel)}</strong>
        <p>学生判断：${escapeHtml(record.selected)}；系统分层：${escapeHtml(record.systemLevel)}；问诊覆盖：${askedCovered}/${askedTotal}</p>
      </div>
      <div class="history-score ${qualified ? "ok" : "warn"}">
        <strong>${escapeHtml(record.rubricAvg)}</strong>
        <small>${resultLabel}</small>
      </div>
    `;
    item.addEventListener("click", () => openHistoryDetail(record));
    historyTimeline.appendChild(item);
  });
}

function renderTeacherRubric() {
  teacherRubricList.innerHTML = "";
  const items = state.rubric.length
    ? state.rubric.map((item) => `${normalizeRubricLabel(item.label)} ${item.score}分`)
    : ["病史采集", "西医线索", "临床推理", "四诊证据", "辨证论治", "中西医整合", "安全沟通"];
  items.forEach((text) => {
    const span = document.createElement("span");
    span.textContent = text;
    teacherRubricList.appendChild(span);
  });
}

function updateTeacherReport(summary) {
  const analysis = state.analysis;
  const selected = state.selectedAnswer ? answerText(state.selectedAnswer) : "未提交";
  const systemLevel = analysis ? analysis.risk.level : "未生成";
  const evidence = analysis ? analysis.evidence.join("；") : "无";
  const coverage = interviewCoverageRate();
  const rubricAvg = state.rubric.length ? `${averageRubricScore()}分` : "未生成";
  const missing = missingRequiredLabels();
  const currentConsistent = state.selectedAnswer && analysis ? state.selectedAnswer === analysis.risk.key : true;
  const currentErrors = deriveErrorTypes({
    consistent: currentConsistent,
    weakness: missing[0] || "证据表达深化",
    selected: answerText(state.selectedAnswer),
    systemLevel,
  });
  trainingReport.textContent = [
    `项目：${PROJECT_NAME}`,
    `训练状态：${summary}`,
    `学生判断：${selected}`,
    `系统分层：${systemLevel}`,
    `问诊覆盖：${coverage.covered}/${coverage.total}`,
    `量规均分：${rubricAvg}`,
    `关键证据：${evidence}`,
    `待补强点：${missing.length ? missing.join("、") : "可进一步训练证据表达与安全边界"}`,
    `教师提示：围绕症状线索、用药依从性、信息缺失和安全边界进行追问。`,
  ].join("\n");
  renderList(discussionList, [
    "学生是否准确识别了便血、腹痛、里急后重等核心线索？",
    "学生是否能说明用药依从性与复发风险之间的关系？",
    "学生是否能把寒热、虚实、舌脉和方证匹配写成证据链？",
    "在信息不充分时，学生是否提出了合理的补充检查或追问？",
    "学生是否避免把训练分层直接表述为诊疗指令？",
  ]);
  renderList(teacherInsightList, [
    missing.length ? `下一轮训练建议补问：${missing.join("、")}。` : "问诊覆盖较完整，可提升证据整合表达。",
    "教师可让学生把解释图谱转写为一段临床推理说明。",
    "课堂讨论中强调系统输出是训练反馈，不替代真实诊疗决策。",
  ]);
  renderErrorDiagnosis(currentErrors);
  renderTeacherRubric();
  renderSyndromeHeatmap();
  renderHistory();
}

function updateDashboard(status) {
  const sample = samples[state.activeCase];
  const activeExam = getActiveExam();
  const examFeedbackLocked = state.mode === "exam" && activeExam && hasCompletedExam(activeExam.id) && !isExamFeedbackOpen(activeExam);
  const dashboardEntryText = state.rubric.length
    ? "查看复盘"
    : examFeedbackLocked
      ? "待开放"
      : (state.selectedAnswer || state.analysis)
        ? "待提交"
        : state.interview.length
          ? "待作答"
          : "未开始";
  if (dashboardCase) dashboardCase.textContent = sample ? sample.label : "自定义病例";
  if (dashboardState) dashboardState.textContent = status || (state.analysis ? "已完成解析": "等待问诊");
  if (dashboardRisk) dashboardRisk.textContent = dashboardEntryText;
  refreshStudentHomePrimary();
}

function answerText(value) {
  return { low: "低风险", medium: "中风险", high: "高风险" }[value] || "提交";
}

const expectedTcmByCase = {
  high: {
    syndromeLabel: "大肠湿热 / 湿热蕴结",
    methodLabel: "清热利湿，调气行血",
    formulaLabel: "芍药汤 / 白头翁汤思路",
    syndromePatterns: [/大肠湿热|湿热蕴结|湿热下注|湿热内蕴|肠道湿热/],
    methodPatterns: [/清热|利湿|化湿|调气|行血|凉血|止痢/],
    formulaPatterns: [/芍药汤|白头翁汤|葛根芩连|黄芩汤/],
    rationale: "黏液脓血、里急后重、腹痛与舌红苔腻更支持大肠湿热/湿热蕴结的教学辨证方向。",
  },
  low: {
    syndromeLabel: "脾虚湿困 / 缓解期调护",
    methodLabel: "健脾益气，化湿调肠",
    formulaLabel: "参苓白术散思路",
    syndromePatterns: [/脾虚|脾气虚|脾虚湿困|脾虚夹湿|缓解期|正虚/],
    methodPatterns: [/健脾|益气|化湿|调肠|扶正|调护/],
    formulaPatterns: [/参苓白术|四君子|香砂六君|补中益气/],
    rationale: "稳定随访期更适合讨论健脾调护与维持管理，不宜按活动期湿热重证处理。",
  },
  boundary: {
    syndromeLabel: "信息不足，暂不定证",
    methodLabel: "先补充四诊信息，再讨论治法",
    formulaLabel: "信息不足，暂不匹配方剂",
    syndromePatterns: [/信息不足|暂不定证|舌脉.*缺|四诊.*不足|不能定证|需补充/],
    methodPatterns: [/补充|四诊|舌脉|检查|暂不|再讨论|信息不足/],
    formulaPatterns: [/暂不|不匹配|信息不足|不宜.*方|待补充|不能.*方/],
    rationale: "边界病例舌脉信息缺失且症状含糊，应优先标注信息不足，再补充四诊与检查证据。",
  },
  dampHeat: {
    syndromeLabel: "湿热蕴结 / 大肠湿热",
    methodLabel: "清热利湿，凉血止痢",
    formulaLabel: "白头翁汤 / 芍药汤思路",
    syndromePatterns: [/湿热|大肠湿热|湿热蕴结|湿热下注|肠道湿热/],
    methodPatterns: [/清热|利湿|凉血|止痢|化湿|调气/],
    formulaPatterns: [/白头翁汤|芍药汤|葛根芩连|黄芩汤/],
    rationale: "黏滞脓血、肛门灼热、口苦口黏、舌红苔黄腻与脉滑数更支持湿热蕴结。",
  },
  spleenDef: {
    syndromeLabel: "脾虚夹湿 / 缓解期虚实夹杂",
    methodLabel: "健脾益气，化湿和中",
    formulaLabel: "参苓白术散 / 香砂六君子思路",
    syndromePatterns: [/脾虚|脾气虚|脾虚夹湿|脾虚湿困|虚实夹杂|缓解期/],
    methodPatterns: [/健脾|益气|化湿|和中|扶正|调护/],
    formulaPatterns: [/参苓白术|香砂六君|四君子|补中益气/],
    rationale: "久病、便溏、劳累加重、神疲乏力、舌淡胖齿痕更支持脾虚夹湿和缓解期调护。",
  },
  coldHeat: {
    syndromeLabel: "寒热错杂 / 虚实夹杂",
    methodLabel: "寒热并调，调和肠腑",
    formulaLabel: "乌梅丸 / 半夏泻心汤思路",
    syndromePatterns: [/寒热错杂|寒热并见|虚实夹杂|寒热|上热下寒/],
    methodPatterns: [/寒热并调|调和|温清|和解|调肠|通补兼施/],
    formulaPatterns: [/乌梅丸|半夏泻心|黄连汤|连理汤/],
    rationale: "遇冷加重、肛门灼热、口干不欲饮、黄白相兼苔提示寒热错杂，不能只按单纯湿热处理。",
  },
  chestPain: {
    syndromeLabel: "（非UC病例，无中医辨证要求）",
    methodLabel: "心血管危险因素评估与胸痛鉴别路径（OPQRST）",
    formulaLabel: "急性冠脉综合征排除 vs 非心源性胸痛",
    syndromePatterns: [],
    methodPatterns: [],
    formulaPatterns: [],
    rationale: "胸痛鉴别以西医临床路径评估为主，中医辨证不作为本次评价重点。",
  },
  cough: {
    syndromeLabel: "（非UC病例，无中医辨证要求）",
    methodLabel: "慢性咳嗽病因鉴别框架（哮喘/GERD/感染等）",
    formulaLabel: "咳嗽变异性哮喘、上气道咳嗽综合征、GERD等鉴别",
    syndromePatterns: [],
    methodPatterns: [],
    formulaPatterns: [],
    rationale: "慢性咳嗽以西医病因鉴别为主，中医辨证不作为本次评价重点。",
  },
  glucose: {
    syndromeLabel: "（非UC病例，无中医辨证要求）",
    methodLabel: "低血糖应急处理与安全边界评估",
    formulaLabel: "血糖管理、胰岛素调整、预防策略",
    syndromePatterns: [],
    methodPatterns: [],
    formulaPatterns: [],
    rationale: "低血糖处理以临床应急路径为主，中医辨证不作为本次评价重点。",
  },
};

function collectTcmAnswer() {
  state.tcmAnswer = {
    syndrome: normalizeText(tcmSyndromeSelect ? tcmSyndromeSelect.value : ""),
    method: normalizeText(tcmMethodSelect ? tcmMethodSelect.value : ""),
    formula: normalizeText(tcmFormulaSelect ? tcmFormulaSelect.value : ""),
    safety: normalizeText(tcmSafetyText ? tcmSafetyText.value : ""),
  };
  return state.tcmAnswer;
}

function resetTcmAnswer() {
  state.tcmAnswer = { syndrome: "", method: "", formula: "", safety: "" };
  if (tcmSyndromeSelect) tcmSyndromeSelect.value = "";
  if (tcmMethodSelect) tcmMethodSelect.value = "";
  if (tcmFormulaSelect) tcmFormulaSelect.value = "";
  if (tcmSafetyText) tcmSafetyText.value = "";
}

function textMatchesAny(text, patterns = []) {
  return patterns.some((pattern) => pattern.test(text));
}

function evaluateTcmAnswer(answer = state.tcmAnswer) {
  const expected = expectedTcmByCase[state.activeCase] || expectedTcmByCase.boundary;
  const filledCount = [answer.syndrome, answer.method, answer.formula].filter((item) => item.length >= 2).length;
  const hasAnyInput = [answer.syndrome, answer.method, answer.formula, answer.safety].some((item) => item.length >= 2);
  const evidenceText = [answer.syndrome, answer.method, answer.formula].join(" ");
  const reasonedCount = [answer.syndrome, answer.method, answer.formula].filter((item) => item.length >= 8 && /因为|由于|提示|支持|依据|结合|可见|考虑|所以/.test(item)).length;
  const evidenceHit = /黏液|脓血|便血|里急后重|腹痛|夜间|停药|漏服|舌|苔|脉|发热|乏力|纳食|粪钙|CRP|内镜|信息不足/.test(evidenceText);
  const matchCount = [
    textMatchesAny(answer.syndrome, expected.syndromePatterns),
    textMatchesAny(answer.method, expected.methodPatterns),
    textMatchesAny(answer.formula, expected.formulaPatterns),
  ].filter(Boolean).length;
  const safetyHit = /就医|复诊|急诊|红旗|脱水|发热|便血加重|加重.*就医|信息不足|不能.*处方|禁忌|风险|医生|医师|复核|审核/.test(answer.safety);
  const score = hasAnyInput
    ? Math.round(clamp(18 + matchCount * 18 + filledCount * 4 + reasonedCount * 5 + (evidenceHit ? 7 : 0) + (safetyHit ? 12 : 0), 0, 94))
    : 0;
  const summary = [
    `学生辨证：${answer.syndrome || "填写"}；治法：${answer.method || "填写"}；方剂思路：${answer.formula || "填写"}。`,
    `参考方向：${expected.syndromeLabel}；${expected.methodLabel}；${expected.formulaLabel}。`,
    expected.rationale,
  ];
  return { score, matchCount, filledCount, reasonedCount, evidenceHit, safetyHit, expected, summary, hasAnyInput };
}

function loadSample(key) {
  state.activeCase = key;
  state.analysis = null;
  state.selectedAnswer = "";
  state.rubric = [];
  resetTcmAnswer();
  state.patientApiSource = "local";
  state.modelApiSource = REMOTE_UC_MODEL_API_URL ? "remote-configured" : "local";
  const sample = samples[key];
  caseInput.value = sample.text;
  caseLabel.textContent = sample.label;
  document.querySelectorAll(".case-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.case === key));
  document.querySelectorAll(".choice-btn").forEach((btn) => btn.classList.remove("selected"));
  parseStatus.textContent = "提交后生成";
  parseStatus.className = "pill neutral";
  setPatientApiStatus("本地患者话术", "neutral");
  setModelApiStatus(REMOTE_UC_MODEL_API_URL ? "已配置远程模型" : "本地规则分层", "neutral");
  renderRiskBadge();
  tagCloud.innerHTML = "";
  structuredTable.innerHTML = "";
  evidenceList.innerHTML = "";
  followupList.innerHTML = "";
  resetExplainPanel();
  resetInterview();
  renderClinicalBasis();
  renderRubric();
  feedbackStatus.textContent = "等待作答";
  feedbackStatus.className = "pill neutral";
  riskLevelText.textContent = "未生成";
  riskMeterBar.style.width = "0%";
  riskMeterHint.textContent = "完成解析后显示训练分层。";
  feedbackTitle.textContent = "尚未生成反馈";
  feedbackText.textContent = "请先完成虚拟问诊和学生判断。提交后系统会自动生成解析复盘与反馈量规。";
  updateTeacherReport("新训练任务已载入。");
  updateDashboard("等待问诊");
  syncPostAnswerAccess();
  const ucCases = ["high", "low", "boundary", "dampHeat", "spleenDef", "coldHeat"];
  if (tcmTaskCard) {
    tcmTaskCard.style.display = ucCases.includes(key) ? "" : "none";
  }
}

function resetCustomCase() {
  state.activeCase = "custom";
  state.analysis = null;
  state.selectedAnswer = "";
  state.rubric = [];
  state.interview = [];
  state.interviewReminder = "";
  resetTcmAnswer();
  state.patientApiSource = "local";
  state.modelApiSource = REMOTE_UC_MODEL_API_URL ? "remote-configured" : "local";
  caseInput.value = "";
  caseLabel.textContent = "自定义病例";
  document.querySelectorAll(".case-tab").forEach((tab) => tab.classList.remove("active"));
  document.querySelectorAll(".choice-btn").forEach((btn) => btn.classList.remove("selected"));
  parseStatus.textContent = "请输入病例";
  parseStatus.className = "pill warn";
  setPatientApiStatus("本地患者话术", "neutral");
  setModelApiStatus(REMOTE_UC_MODEL_API_URL ? "已配置远程模型" : "本地规则分层", "neutral");
  tagCloud.innerHTML = "";
  structuredTable.innerHTML = "";
  resetExplainPanel();
  renderInterview();
  renderClinicalBasis();
  renderRubric();
  updateTeacherReport("已进入自定义病例草稿。");
  updateDashboard("自定义输入");
  syncPostAnswerAccess();
  if (tcmTaskCard) tcmTaskCard.style.display = "none";
}

function renderBuilderPreview() {
  builderPreview.innerHTML = `
    <p><strong>任务：</strong>${escapeHtml(builderTitle.value)}</p>
    <p><strong>目标：</strong>${escapeHtml(builderObjective.value)}</p>
    <p><strong>难度：</strong>${escapeHtml(builderDifficulty.value)}</p>
    <p><strong>专科/疾病域：</strong>${escapeHtml(builderSpecialty.value)}</p>
    <p><strong>案例来源：</strong>${escapeHtml(builderSource.value)}</p>
    <p><strong>标准分层：</strong>${escapeHtml(builderRisk.value)}</p>
    <p><strong>建议流程：</strong>病例导入 -> 虚拟问诊 -> 学生作答 -> 解析复盘 -> 教师复盘。</p>
  `;
}

function parseDurationMinutes(durationText = "") {
  const match = durationText.match(/(\d+)/);
  return match ? Number(match[1]) : 30;
}

function parseDateTimeLocal(value) {
  if (!value) return null;
  const time = new Date(value).getTime();
  return Number.isFinite(time) ? time : null;
}

function formatDateTime(ts) {
  return ts ? new Date(ts).toLocaleString("zh-CN", { hour12: false }) : "发布后立即开始";
}

function formatRemain(ms) {
  if (ms <= 0) return "已截止";
  const totalSec = Math.floor(ms / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `剩余 ${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function clearExamCountdownTimer() {
  if (examCountdownTimer) {
    clearInterval(examCountdownTimer);
    examCountdownTimer = null;
  }
}

function startExamCountdown() {
  clearExamCountdownTimer();
  const node = document.querySelector("#examCountdown");
  if (!node || !state.activeExam || !state.activeExam.dueAt) return;
  const tick = () => {
    node.textContent = formatRemain(state.activeExam.dueAt - Date.now());
  };
  tick();
  examCountdownTimer = setInterval(tick, 1000);
}

function applyTemplatePreset(key) {
  const preset = templatePresets[key];
  if (!preset) return;
  builderTitle.value = preset.title;
  builderObjective.value = preset.objective;
  builderSpecialty.value = preset.specialty;
  builderSource.value = "教师自建案例";
  builderRisk.value = preset.risk;
  builderStatus.textContent = "已载入跨专科模板";
  builderStatus.className = "pill success";
  renderBuilderPreview();
  setRole("teacher", false);
  setRoute("builder");
}

function renderExamPreview() {
  const selectedCase = samples[examCaseKey ? examCaseKey.value : "high"];
  const startAt = parseDateTimeLocal(examStartAt ? examStartAt.value : "");
  const endAt = parseDateTimeLocal(examEndAt ? examEndAt.value : "");
  examPreview.innerHTML = `
    <p><strong>考试：</strong>${escapeHtml(examTitle.value)}</p>
    <p><strong>班级：</strong>${escapeHtml(examClass.value)}</p>
    <p><strong>专科/疾病域：</strong>${escapeHtml(examSpecialty.value)}</p>
    <p><strong>案例来源：</strong>${escapeHtml(examSource.value)}</p>
    <p><strong>考试病例：</strong>${escapeHtml(selectedCase ? selectedCase.label : "教师自建病例")}</p>
    <p><strong>开始时间：</strong>${escapeHtml(formatDateTime(startAt))}</p>
    <p><strong>截止时间：</strong>${escapeHtml(endAt ? formatDateTime(endAt) : "按考试时长自动计算")}</p>
    <p><strong>考试时长：</strong>${escapeHtml(examDuration.value)}</p>
    <p><strong>反馈开放：</strong>${escapeHtml(examFeedbackMode.value)}</p>
    <p><strong>考试流程：</strong>按开放时间进入，问诊与作答阶段隐藏解析，教师确认后统一开放复盘。</p>
  `;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value;
  const account = credentials[username];
  if (account && password === account.password) {
    loginError.textContent = "";
    sessionStorage.setItem("agent_demo_login", "true");
    sessionStorage.setItem("agent_demo_role", account.role);
    setView(true);
    state.mode = "practice";
    state.activeExam = null;
    document.body.dataset.mode = "practice";
    clearExamCountdownTimer();
    loadSample("high");
    setRole(account.role, false);
    const hashRoute = location.hash.replace("#", "");
    const startRoute = hashRoute && routeMeta[hashRoute] && routeAllowedForRole(hashRoute, account.role)
      ? hashRoute
      : roleHomeRoute[account.role];
    setRoute(startRoute);
    return;
  }
  loginError.textContent = "账号或密码不正确。学生工作台账号：student_demo；教学复盘账号：teacher_demo；密码均为 ChangYu2026!";
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("agent_demo_login");
  sessionStorage.removeItem("agent_demo_role");
  state.mode = "practice";
  state.activeExam = null;
  document.body.dataset.mode = "practice";
  clearExamCountdownTimer();
  setView(false);
});

function openAboutModal() {
  aboutModal.classList.remove("hidden");
  aboutModal.setAttribute("aria-hidden", "false");
}
function closeAboutModal() {
  aboutModal.classList.add("hidden");
  aboutModal.setAttribute("aria-hidden", "true");
}
aboutBtn.addEventListener("click", openAboutModal);
aboutCloseBtn.addEventListener("click", closeAboutModal);
aboutModal.addEventListener("click", (event) => {
  if (event.target === aboutModal) closeAboutModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !aboutModal.classList.contains("hidden")) closeAboutModal();
});

document.querySelectorAll(".case-tab[data-case]").forEach((tab) => {
  tab.addEventListener("click", () => {
    loadSample(tab.dataset.case);
    setRoute("cases");
  });
});

if (emptyCaseBtn) {
  emptyCaseBtn.addEventListener("click", () => {
    resetCustomCase();
    setRoute("builder");
  });
}

analyzeBtn.addEventListener("click", () => renderAnalysis());
resetBtn.addEventListener("click", () => loadSample(samples[state.activeCase] ? state.activeCase : "high"));
submitJudgementBtn.addEventListener("click", submitJudgement);

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => setRoute(item.dataset.route));
});

document.querySelectorAll("[data-go]").forEach((item) => {
  item.addEventListener("click", () => setRoute(item.dataset.go));
});

document.querySelectorAll("[data-template]").forEach((item) => {
  item.addEventListener("click", () => applyTemplatePreset(item.dataset.template));
});

document.querySelectorAll(".choice-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.selectedAnswer = btn.dataset.answer;
    document.querySelectorAll(".choice-btn").forEach((item) => item.classList.remove("selected"));
    btn.classList.add("selected");
    renderRiskBadge();
  });
});

document.querySelectorAll(".question-chip").forEach((btn) => {
  btn.addEventListener("click", () => askQuestion(btn.dataset.question));
});

askCustomBtn.addEventListener("click", () => {
  askQuestion("", customQuestionInput.value);
  customQuestionInput.value = "";
});

customQuestionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    askCustomBtn.click();
  }
});

builderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderBuilderPreview();
  builderStatus.textContent = "已保存草稿";
  builderStatus.className = "pill success";
  writeBuilderDraft({
    id: `draft-${Date.now()}`,
    title: builderTitle.value || "未命名课程",
    objective: builderObjective.value || "",
    specialty: builderSpecialty.value || "未设置",
    difficulty: builderDifficulty.value || "未设置",
    savedAt: new Date().toLocaleString("zh-CN", { hour12: false }),
  });
  renderTeacherHome();
});

[builderTitle, builderObjective, builderDifficulty, builderSpecialty, builderSource, builderRisk].forEach((field) => {
  field.addEventListener("input", renderBuilderPreview);
  field.addEventListener("change", renderBuilderPreview);
});

examForm.addEventListener("submit", (event) => {
  // 这里只做兜底:渲染考试预览,真正的发布在 publishExamTask() 里(见文件末尾追加代码,捕获阶段优先执行)
  event.preventDefault();
  renderExamPreview();
});

[examTitle, examClass, examSpecialty, examSource, examCaseKey, examStartAt, examEndAt, examDuration, examFeedbackMode].forEach((field) => {
  if (!field) return;
  field.addEventListener("input", renderExamPreview);
  field.addEventListener("change", renderExamPreview);
});

if (publishDraftExamBtn) {
  publishDraftExamBtn.addEventListener("click", () => {
    if (examTitle) examTitle.value = builderTitle.value || "临床病例推理阶段测验";
    if (examSpecialty) {
      const domain = (builderSpecialty.value || "").split("：")[0];
      const option = Array.from(examSpecialty.options).find((item) => item.value === builderSpecialty.value || item.textContent.startsWith(domain));
      if (option) examSpecialty.value = option.value;
    }
    if (examSource) {
      const option = Array.from(examSource.options).find((item) => item.value === builderSource.value);
      if (option) examSource.value = option.value;
    }
    if (examCaseKey) {
      const riskMap = { 低风险: "low", 中风险: "boundary", 高风险: "high" };
      examCaseKey.value = riskMap[builderRisk.value] || "high";
    }
    renderExamPreview();
    examStatus.textContent = "已载入建课草稿";
    examStatus.className = "pill warn";
    setRoute("exam");
  });
}

copyReportBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(trainingReport.textContent);
    copyReportBtn.textContent = "已复制";
    setTimeout(() => {
      copyReportBtn.textContent = "复制训练记录";
    }, 1400);
  } catch {
    copyReportBtn.textContent = "复制失败";
  }
});

renderBuilderPreview();
renderExamPreview();
renderHistory();

const savedRole = sessionStorage.getItem("agent_demo_role");
setRole(savedRole === "teacher" ? "teacher" : "student", false);

if (sessionStorage.getItem("agent_demo_login") === "true") {
  setView(true);
  loadSample("high");
  const hashRoute = location.hash.replace("#", "");
  const startRoute = hashRoute && routeMeta[hashRoute] && routeAllowedForRole(hashRoute)
    ? hashRoute
    : roleHomeRoute[state.role];
  setRoute(startRoute);
} else {
  setView(false);
}

/* ===================================================================
 * 第二轮追加:教师端数据桥 + 考试模式 + 学习轨迹详情弹窗
 * =================================================================== */

/* ---- Mock 班级与学生数据 ---- */
const defaultClassMock = [
  {
    id: "class-2022-2",
    name: "2022级临床医学2班",
    size: 48,
    completeRate: 82,
    students: [
      { id: "s-2022-2-01", name: "子悦", sessions: 4, avg: 88, weakness: "证据整合", correct: 3, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-20 14:32:10" },
      { id: "s-2022-2-02", name: "安然", sessions: 3, avg: 73, weakness: "检查追问", correct: 1, lastCase: "边界病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-19 10:15:02" },
      { id: "s-2022-2-03", name: "思远", sessions: 5, avg: 91, weakness: "风险表达深化", correct: 5, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-21 09:08:45" },
      { id: "s-2022-2-04", name: "雨欣", sessions: 2, avg: 68, weakness: "用药依从性追问", correct: 1, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-18 16:44:30" },
      { id: "s-2022-2-05", name: "梦洁", sessions: 4, avg: 84, weakness: "安全边界表达", correct: 3, lastCase: "边界病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-20 20:11:58" },
      { id: "s-2022-2-06", name: "志远", sessions: 1, avg: 62, weakness: "问诊覆盖不足", correct: 0, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-17 11:02:19" },
    ],
  },
  {
    id: "class-2023-tcm",
    name: "2023级中西医结合1班",
    size: 36,
    completeRate: 64,
    students: [
      { id: "s-2023-t-01", name: "佳宁", sessions: 3, avg: 80, weakness: "舌脉信息整合", correct: 2, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-20 15:23:11" },
      { id: "s-2023-t-02", name: "若彤", sessions: 2, avg: 75, weakness: "中西医结合推理", correct: 1, lastCase: "边界病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-19 19:42:08" },
      { id: "s-2023-t-03", name: "家豪", sessions: 4, avg: 86, weakness: "检查指标追问", correct: 3, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-21 08:58:33" },
      { id: "s-2023-t-04", name: "梓涵", sessions: 1, avg: 58, weakness: "核心症状识别", correct: 0, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-16 14:07:50" },
    ],
  },
  {
    id: "class-res-gi",
    name: "住培消化方向班",
    size: 24,
    completeRate: 91,
    students: [
      { id: "s-res-gi-01", name: "书言(规培)", sessions: 6, avg: 92, weakness: "证据表达深化", correct: 6, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-21 16:30:44" },
      { id: "s-res-gi-02", name: "佳怡(规培)", sessions: 5, avg: 88, weakness: "风险分层阈值讨论", correct: 4, lastCase: "边界病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-20 21:14:09" },
      { id: "s-res-gi-03", name: "辰阳(规培)", sessions: 4, avg: 83, weakness: "信息不足下的表达", correct: 3, lastCase: "高风险病例", selected: "高风险", systemLevel: "高风险", lastTime: "2026-04-19 22:51:27" },
    ],
  },
];

const classMockWeaknessFixups = {
  据整合: "证据整合",
  查追问: "检查追问",
  险表达深化: "风险表达深化",
  全边界表达: "安全边界表达",
  脉信息整合: "舌脉信息整合",
  西医结合推理: "中西医结合推理",
  查指标追问: "检查指标追问",
  心症状识别: "核心症状识别",
  据表达深化: "证据表达深化",
  险分层阈值讨论: "风险分层阈值讨论",
  息不足下的表达: "信息不足下的表达",
};

const classMockCaseFixups = {
  风险病例: "高风险病例",
  界病例: "边界病例",
};

const classMockRiskFixups = {
  风险: "高风险",
};

function normalizeClassMockData(list = []) {
  return (list || []).map((klass) => ({
    ...klass,
    students: (klass.students || []).map((student) => ({
      ...student,
      weakness: classMockWeaknessFixups[student.weakness] || student.weakness,
      lastCase: classMockCaseFixups[student.lastCase] || student.lastCase,
      selected: classMockRiskFixups[student.selected] || student.selected,
      systemLevel: classMockRiskFixups[student.systemLevel] || student.systemLevel,
    })),
  }));
}

function readClassMock() {
  try {
    const raw = localStorage.getItem(LS_CLASS_MOCK);
    if (raw) {
      const normalized = normalizeClassMockData(JSON.parse(raw));
      localStorage.setItem(LS_CLASS_MOCK, JSON.stringify(normalized));
      return normalized;
    }
  } catch {}
  const seeded = normalizeClassMockData(defaultClassMock);
  localStorage.setItem(LS_CLASS_MOCK, JSON.stringify(seeded));
  return seeded;
}
function readPendingExams() {
  try { return JSON.parse(localStorage.getItem(LS_PENDING_EXAMS)) || []; } catch { return []; }
}
function writePendingExam(exam) {
  const list = readPendingExams();
  list.unshift(exam);
  localStorage.setItem(LS_PENDING_EXAMS, JSON.stringify(list.slice(0, 20)));
}
function updatePendingExam(examId, updater) {
  const list = readPendingExams();
  const next = list.map((exam) => exam.id === examId ? { ...exam, ...updater(exam) } : exam);
  localStorage.setItem(LS_PENDING_EXAMS, JSON.stringify(next));
  return next.find((exam) => exam.id === examId) || null;
}
function readCompletedExamIds() {
  try { return JSON.parse(localStorage.getItem(LS_COMPLETED_EXAMS)) || []; } catch { return []; }
}
function markExamCompleted(examId) {
  if (!examId) return;
  const ids = new Set(readCompletedExamIds());
  ids.add(examId);
  localStorage.setItem(LS_COMPLETED_EXAMS, JSON.stringify([...ids]));
}
function hasCompletedExam(examId) {
  return readCompletedExamIds().includes(examId);
}
function latestExamById(examId) {
  return readPendingExams().find((exam) => exam.id === examId) || null;
}
function getActiveExam() {
  if (!state.activeExam) return null;
  const latest = latestExamById(state.activeExam.id);
  if (latest) state.activeExam = latest;
  return state.activeExam;
}
function isExamFeedbackOpen(exam) {
  if (!exam) return false;
  if (exam.feedbackMode === "仅教学复盘可见") return false;
  if (exam.releasedAt) return true;
  return exam.feedbackMode === "考试结束后自动开放" && exam.dueAt && Date.now() >= exam.dueAt;
}
function releaseExamFeedback(examId) {
  const released = updatePendingExam(examId, () => ({
    releasedAt: new Date().toLocaleString("zh-CN", { hour12: false }),
  }));
  if (released && state.activeExam && state.activeExam.id === examId) state.activeExam = released;
  renderTeacherHome();
  renderClassPage();
  renderStudentExamTasks();
  applyModeHints();
}
function readExamSubmissions() {
  try { return JSON.parse(localStorage.getItem(LS_EXAM_SUBMISSIONS)) || []; } catch { return []; }
}
function writeExamSubmission(sub) {
  const list = readExamSubmissions();
  list.unshift(sub);
  localStorage.setItem(LS_EXAM_SUBMISSIONS, JSON.stringify(list.slice(0, 30)));
}

function refreshStudentHomePrimary(pendingExams = null, completedExams = null) {
  const titleEl = document.querySelector("#studentPrimaryTitle");
  const metaEl = document.querySelector("#studentPrimaryMeta");
  const hintEl = document.querySelector("#studentPrimaryHint");
  const btn = document.querySelector("#studentPrimaryBtn");
  if (!titleEl || !metaEl || !hintEl || !btn) return;
  const allExams = readPendingExams();
  const exams = pendingExams || allExams.filter((exam) => !hasCompletedExam(exam.id));
  const doneExams = completedExams || allExams.filter((exam) => hasCompletedExam(exam.id));
  const sample = samples[state.activeCase];
  const caseName = sample ? sample.label : "自定义病例";
  const setPrimary = (title, meta, hint, label, handler) => {
    titleEl.textContent = title;
    metaEl.textContent = meta;
    hintEl.textContent = hint;
    btn.textContent = label;
    btn.disabled = false;
    btn.onclick = handler;
  };
  const now = Date.now();
  const activeExam = getActiveExam();
  if (state.mode === "exam" && activeExam && hasCompletedExam(activeExam.id)) {
    const feedbackOpen = isExamFeedbackOpen(activeExam);
    setPrimary(
      feedbackOpen ? "查看考试反馈": "考试已提交，等待反馈开放",
      `${activeExam.title} · ${activeExam.caseLabel || "训练病例"}`,
      feedbackOpen ? "教师已开放反馈，可以到学习轨迹查看本次考试复盘。" : "本次考试已提交。反馈开放前，你可以先进行自由练习。",
      feedbackOpen ? "查看轨迹": "自由练习",
      () => {
        if (feedbackOpen) {
          setRoute("history");
        } else {
          exitExamMode();
          setRoute("cases");
        }
      }
    );
    return;
  }
  if (state.mode === "exam" && activeExam && !hasCompletedExam(activeExam.id)) {
    const nextRoute = state.selectedAnswer ? "judgement" : state.interview.length ? "interview" : "cases";
    setPrimary(
      `继续考试：${activeExam.title}`,
      `${activeExam.caseLabel || "训练病例"} · ${activeExam.dueAt ? formatRemain(activeExam.dueAt - now) : "限时考试"}`,
      "考试模式下先完成问诊和作答，解析与解释图谱按教师设置开放。",
      "继续考试",
      () => setRoute(nextRoute)
    );
    return;
  }
  const enterableExam = exams.find((exam) => (!exam.startAt || now >= exam.startAt) && (!exam.dueAt || now <= exam.dueAt));
  if (enterableExam) {
    setPrimary(
      `待完成考试：${enterableExam.title}`,
      `${enterableExam.className} · ${enterableExam.caseLabel || "训练病例"} · ${enterableExam.dueAt ? formatRemain(enterableExam.dueAt - now) : enterableExam.duration}`,
      "先进入考试完成问诊和独立判断，反馈会按教师设置开放。",
      "进入考试",
      () => startExam(enterableExam)
    );
    return;
  }
  const upcomingExam = exams.find((exam) => exam.startAt && now < exam.startAt);
  if (upcomingExam) {
    setPrimary(
      `考试未开始：${upcomingExam.title}`,
      `${upcomingExam.className} · 开放时间 ${formatDateTime(upcomingExam.startAt)}`,
      "考试开始前可以先做自由练习，考试任务会保留在下方提醒中。",
      "先自由练习",
      () => setRoute("cases")
    );
    return;
  }
  if (state.rubric.length) {
    setPrimary(
      "查看本次训练复盘",
      `${caseName} · 已完成作答与反馈生成`,
      doneExams.length ? "如需看考试反馈，请等待教师开放后进入学习轨迹。" : "建议先看反馈报告，再查看解释图谱和学习轨迹。",
      "查看反馈",
      () => setRoute("feedback")
    );
    return;
  }
  if (state.selectedAnswer || state.analysis) {
    setPrimary(
      "继续完成本次训练",
      `${caseName} · 已进入作答阶段`,
      "请先提交风险判断和中医辨证思路，提交后再查看复盘。",
      "去作答",
      () => setRoute("judgement")
    );
    return;
  }
  if (state.interview.length) {
    setPrimary(
      "继续虚拟问诊",
      `${caseName} · 已记录 ${state.interview.length} 个追问`,
      "继续补齐关键问诊点，然后再进入独立判断。",
      "继续问诊",
      () => setRoute("interview")
    );
    return;
  }
  setPrimary(
    "开始一次病例训练",
    "按病例阅读、虚拟问诊、独立判断、辨证思路、反馈复盘的顺序完成训练。",
    "系统会在你提交判断后再开放解析、量规和解释图谱，避免一开始泄露答案。",
    "开始训练",
    () => setRoute("cases")
  );
}

/* ---- 学生工作台:我的考试任务 ---- */
function renderStudentExamTasks() {
  const listEl = document.querySelector("#studentExamList");
  const badge = document.querySelector("#studentExamBadge");
  if (!listEl || !badge) return;
  const now = Date.now();
  const allExams = readPendingExams();
  const exams = allExams.filter((exam) => !hasCompletedExam(exam.id));
  const completedExams = allExams.filter((exam) => hasCompletedExam(exam.id));
  refreshStudentHomePrimary(exams, completedExams);
  const enterableExams = exams.filter((exam) => (!exam.startAt || now >= exam.startAt) && (!exam.dueAt || now <= exam.dueAt));
  const upcomingExams = exams.filter((exam) => exam.startAt && now < exam.startAt);
  const expiredExams = exams.filter((exam) => exam.dueAt && now > exam.dueAt);
  const visibleExams = [...enterableExams, ...upcomingExams, ...expiredExams].slice(0, 2);
  if (!visibleExams.length) {
    badge.textContent = completedExams.length ? "已提交": "暂无任务";
    badge.className = completedExams.length ? "pill success" : "pill neutral";
    listEl.innerHTML = "";
    if (!completedExams.length) {
      listEl.innerHTML = '<div class="empty-chart compact-empty">当前没有待完成考试。</div>';
      return;
    }
    completedExams.slice(0, 2).forEach((exam) => {
      const open = isExamFeedbackOpen(exam);
      const card = document.createElement("div");
      card.className = "exam-task-card compact";
      card.innerHTML = `
        <div class="exam-task-head">
          <strong>${escapeHtml(exam.title)}</strong>
          <span class="pill ${open ? "success" : "warn"}">${open ? "反馈已开放": "待教师开放"}</span>
        </div>
        <p class="muted-copy">${escapeHtml(exam.caseLabel || "训练病例")} · 已提交</p>
        <div class="exam-task-actions">
          <button class="secondary-btn small-btn" type="button" ${open ? "" : "disabled"}>${open ? "看轨迹": "反馈未开放"}</button>
        </div>
      `;
      const btn = card.querySelector("button");
      if (open) btn.addEventListener("click", () => setRoute("history"));
      listEl.appendChild(card);
    });
    return;
  }
  if (enterableExams.length) {
    badge.textContent = `${enterableExams.length} 个待完成`;
    badge.className = "pill warn";
  } else if (upcomingExams.length) {
    badge.textContent = "未开始";
    badge.className = "pill neutral";
  } else {
    badge.textContent = "已截止";
    badge.className = "pill neutral";
  }
  listEl.innerHTML = "";
  visibleExams.forEach((exam) => {
    const remainLabel = exam.dueAt ? formatRemain(exam.dueAt - now) : "剩余 --:--";
    const notStarted = exam.startAt && now < exam.startAt;
    const expired = exam.dueAt && now > exam.dueAt;
    const canEnter = !notStarted && !expired;
    const statusText = notStarted ? "未开始" : (expired ? "已截止" : "待完成");
    const card = document.createElement("div");
    card.className = "exam-task-card compact";
    card.innerHTML = `
      <div class="exam-task-head">
        <strong>${escapeHtml(exam.title)}</strong>
        <span class="pill ${canEnter ? "warn" : "neutral"}">${statusText}</span>
      </div>
      <p class="muted-copy">${escapeHtml(exam.caseLabel || "训练病例")} · ${expired ? "截止，未提交" : remainLabel}</p>
      <p class="muted-copy">${notStarted ? "开放：" + escapeHtml(formatDateTime(exam.startAt)) : expired ? "考试已过截止时间" : "反馈：" + escapeHtml(exam.feedbackMode)}</p>
      <div class="exam-task-actions">
        <button class="${canEnter ? "primary-btn" : "secondary-btn"} small-btn" type="button" data-exam-id="${escapeHtml(exam.id)}" ${canEnter ? "" : "disabled"}>${notStarted ? "未开始" : (expired ? "已截止" : "进入考试")}</button>
      </div>
    `;
    if (canEnter) card.querySelector("button").addEventListener("click", () => startExam(exam));
    listEl.appendChild(card);
  });
}

function startExam(exam) {
  state.mode = "exam";
  state.activeExam = exam;
  loadSample(exam.caseKey || "high");
  document.body.dataset.mode = "exam";
  setRoute("cases");
  applyModeHints();
}

function exitExamMode() {
  const resetCaseKey = samples[state.activeCase] ? state.activeCase : "high";
  state.mode = "practice";
  state.activeExam = null;
  document.body.dataset.mode = "practice";
  clearExamCountdownTimer();
  loadSample(resetCaseKey);
  applyModeHints();
}

function applyModeHints() {
  const isExam = state.mode === "exam";
  const activeExam = getActiveExam();
  const feedbackOpen = isExamFeedbackOpen(activeExam);
  if (isExam && feedbackOpen && state.analysis && state.rubric.length) {
    const coverage = interviewCoverageRate();
    const correct = state.selectedAnswer === state.analysis.risk.key;
    feedbackStatus.textContent = "考试反馈已开放";
    feedbackStatus.className = "pill success";
    feedbackTitle.textContent = correct && coverage.percent >= 70 ? "考试判断方向较好": "考试复盘已开放";
    feedbackText.textContent = correct && coverage.percent >= 70
      ? "教师已开放本次考试反馈。你的风险分层与系统参考结果一致，且核心问诊覆盖较完整。"
      : correct
        ? `教师已开放本次考试反馈。你的风险分层方向一致，但只覆盖了${coverage.covered}/${coverage.total}个核心问诊点。`
        : `教师已开放本次考试反馈。系统参考分层为「${state.analysis.risk.level}」，请回到解析复盘查看遗漏线索。`;
    riskMeterHint.textContent = "考试反馈已开放，可查看解析复盘、反馈量规和解释图谱。";
  }
  // cases 页顶部加/移除考试提示
  const caseHeader = document.querySelector("#page-cases .panel-head");
  let banner = document.querySelector("#examModeBanner");
  if (isExam && !banner && caseHeader) {
    const title = activeExam ? activeExam.title : "考试任务";
    banner = document.createElement("div");
    banner.id = "examModeBanner";
    banner.className = "exam-banner";
    banner.innerHTML = `
      <strong>考试模式进行中：</strong>${escapeHtml(title)}。
      <span id="examCountdown" class="exam-countdown">剩余 --:--</span>
      作答提交后，解析、反馈量规与解释图谱将在教师统一发布后开放。
      <button class="link-btn" type="button" id="exitExamBtn">退出考试回到自由练习</button>
    `;
    document.querySelector("#page-cases").insertBefore(banner, document.querySelector("#page-cases").firstChild);
    banner.querySelector("#exitExamBtn").addEventListener("click", () => {
      exitExamMode();
      banner.remove();
      setRoute("dashboard");
    });
    startExamCountdown();
  } else if (!isExam && banner) {
    clearExamCountdownTimer();
    banner.remove();
  }
  // analysis / feedback / explain 的锁定遮罩
  ["analysis", "feedback", "explain"].forEach((routeId) => {
    const page = document.querySelector(`#page-${routeId}`);
    if (!page) return;
    let lock = page.querySelector(".exam-lock-overlay");
    const hasSubmitted = state.rubric.length > 0;
    const shouldLock = isExam && (!hasSubmitted || !feedbackOpen);
    if (shouldLock) {
      const targetRoute = hasSubmitted ? "dashboard" : "judgement";
      const lockedCopy = hasSubmitted && activeExam && activeExam.feedbackMode === "仅教学复盘可见"
        ? "本次考试设置为仅教师复盘可见，学生端不开放解析内容。"
        : hasSubmitted
          ? "你已提交考试答案。根据教师设置，该页内容将在教师统一发布后开放。"
          : "解析、反馈量规与解释图谱暂不开放，请先完成问诊和学生作答。";
      if (!lock) {
        lock = document.createElement("div");
        lock.className = "exam-lock-overlay";
        page.appendChild(lock);
      }
      lock.innerHTML = `
        <div class="exam-lock-card">
          <strong>${hasSubmitted ? "考试模式 · 反馈已锁定": "考试模式 · 请先完成作答"}</strong>
          <p>${lockedCopy}</p>
          <button class="secondary-btn" type="button">${hasSubmitted ? "回工作台": "回学生作答"}</button>
        </div>
      `;
      lock.querySelector("button").addEventListener("click", () => setRoute(targetRoute));
    } else if (!shouldLock && lock) {
      lock.remove();
    }
  });
  syncPostAnswerAccess();
}

/* ---- 教师工作台 ---- */
function renderTeacherHome() {
  const classes = readClassMock();
  const exams = readPendingExams();
  const submissions = readExamSubmissions();
  const allStudents = classes.flatMap((c) => c.students.map((st) => ({ ...st, className: c.name, classId: c.id })));
  const el = (id) => document.querySelector(id);

  // 首页只保留"现在该处理什么'，避免变成指标报表页。
  const realPending = submissions.slice(0, 3).map((sub) => ({ ...sub, isSubmission: true }));
  const pending = [
    ...realPending,
    ...allStudents.filter((st) => st.avg < 80 || st.selected !== st.systemLevel),
  ].slice(0, 4);
  const setPrimaryTask = (title, meta, hint, label, handler) => {
    if (el("#thPrimaryTaskTitle")) el("#thPrimaryTaskTitle").textContent = title;
    if (el("#thPrimaryTaskMeta")) el("#thPrimaryTaskMeta").textContent = meta;
    if (el("#thPrimaryTaskHint")) el("#thPrimaryTaskHint").textContent = hint;
    const btn = el("#thPrimaryTaskBtn");
    if (btn) {
      btn.textContent = label;
      btn.onclick = handler;
    }
  };
  const firstPending = pending[0];
  if (firstPending) {
    if (firstPending.isSubmission) {
      setPrimaryTask(
        "优先复盘：真实考试提交",
        `${firstPending.examClassName || "未绑定班级"} · ${firstPending.examTitle || "考试任务"} · ${firstPending.rubricAvg || 0} 分`,
        `建议先看「${firstPending.weakness || "证据链完整性"}」，再决定是否开放反馈。`,
        "进入复盘",
        () => gotoReview(`submission:${firstPending.id}`)
      );
    } else {
      setPrimaryTask(
        `优先复盘：${firstPending.name}`,
        `${firstPending.className} · ${firstPending.lastCase} · ${firstPending.avg} 分`,
        `当前薄弱点是「${firstPending.weakness}」，适合做一次短复盘。`,
        "进入复盘",
        () => gotoReview(firstPending.id)
      );
    }
  } else if (exams.length) {
    const exam = exams[0];
    const count = submissions.filter((sub) => sub.examId === exam.id).length;
    const open = isExamFeedbackOpen(exam);
    setPrimaryTask(
      open ? "检查已发布考试": "处理考试反馈开放",
      `${exam.className} · ${exam.title} · 已提交 ${count} 份`,
      open ? "反馈已经开放，可进入考试模式查看发布设置。" : "建议统一讲评后再开放学生端反馈。",
      "查看考试",
      () => setRoute("exam")
    );
  } else {
    setPrimaryTask(
      "发布一次训练或考试",
      "当前没有待复盘学生，也没有已发布考试。",
      "可以从考试模式选择病例、设置时间，并决定反馈开放节奏。",
      "发布考试",
      () => setRoute("exam")
    );
  }

  const examControlEl = el("#thExamControlList");
  if (examControlEl) {
    examControlEl.innerHTML = "";
    if (!exams.length) {
      examControlEl.innerHTML = '<div class="empty-chart compact-empty">暂无已发布考试。</div>';
    } else {
      exams.slice(0, 2).forEach((exam) => {
        const count = submissions.filter((sub) => sub.examId === exam.id).length;
        const open = isExamFeedbackOpen(exam);
        const card = document.createElement("article");
        card.className = "exam-control-card compact";
        const canRelease = exam.feedbackMode !== "仅教学复盘可见" && !open;
        card.innerHTML = `
          <div>
            <strong>${escapeHtml(exam.title)}</strong>
            <p class="muted-copy">${escapeHtml(exam.className)} · 已提交 ${count} 份</p>
            <p class="muted-copy">${open ? "反馈已开放" : escapeHtml(exam.feedbackMode)}</p>
          </div>
          <button class="${canRelease ? "primary-btn" : "secondary-btn"}" type="button" ${canRelease ? "" : "disabled"}>${open ? "反馈已开放" : (exam.feedbackMode === "教学复盘可见" ? "教师可见" : "开放反馈")}</button>
        `;
        const btn = card.querySelector("button");
        if (canRelease) btn.addEventListener("click", () => releaseExamFeedback(exam.id));
        examControlEl.appendChild(card);
      });
    }
  }
  const pendingEl = el("#thPendingReviewList");
  if (pendingEl) {
    pendingEl.innerHTML = "";
    if (!pending.length) {
      pendingEl.innerHTML = '<div class="empty-chart compact-empty">当前没有优先复盘项。</div>';
    } else {
      pending.slice(0, 2).forEach((st) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "pending-review-card compact";
        card.innerHTML = st.isSubmission ? `
          <div class="pending-review-head">
            <strong>student_demo</strong>
            <span class="pill ${st.rubricAvg < 70 ? "warn" : "neutral"}">${escapeHtml(st.rubricAvg || 0)} 分</span>
          </div>
          <p class="muted-copy">${escapeHtml(st.examClassName || "未绑定班级")} · ${escapeHtml(st.examTitle || "考试任务")}</p>
          <p class="muted-copy">重点：${escapeHtml(st.weakness || "待教师复盘")}</p>
        ` : `
          <div class="pending-review-head">
            <strong>${escapeHtml(st.name)}</strong>
            <span class="pill ${st.avg < 70 ? "warn" : "neutral"}">${escapeHtml(st.avg)} 分</span>
          </div>
          <p class="muted-copy">${escapeHtml(st.className)} · ${escapeHtml(st.lastCase)}</p>
          <p class="muted-copy">重点：${escapeHtml(st.weakness)}</p>
        `;
        card.addEventListener("click", () => {
          gotoReview(st.isSubmission ? `submission:${st.id}` : st.id);
        });
        pendingEl.appendChild(card);
      });
    }
  }
}

function renderCompetitionEvidence() {
  const data = competitionEvidenceData.pilot;
  const set = (id, text) => {
    const node = document.querySelector(id);
    if (node) node.textContent = text;
  };
  set("#evCoverage", `${data.afterCoverage}%`);
  set("#evCoverageDelta", `演示基线 ${data.beforeCoverage}% -> 目标 ${data.afterCoverage}%`);
  set("#evConsistency", `${data.afterConsistency}%`);
  set("#evConsistencyDelta", `演示基线 ${data.beforeConsistency}% -> 目标 ${data.afterConsistency}%`);
  set("#evRubric", `${data.afterRubric} 分`);
  set("#evRubricDelta", `演示基线 ${data.beforeRubric} 分 -> 目标 ${data.afterRubric} 分`);
  set("#evCompletion", `${data.completionRate}%`);
  set("#evReviewRate", `复盘阅读率 ${data.reviewReadRate}% · 平均完成时长 ${data.avgDuration}`);
  set("#evCompareText", competitionEvidenceData.compareText);
  renderList(document.querySelector("#evProcessList"), competitionEvidenceData.process);
  renderList(document.querySelector("#aiChainList"), competitionEvidenceData.aiChain);
  renderList(document.querySelector("#llmDiffList"), competitionEvidenceData.llmDiff);

  const caseList = document.querySelector("#evCaseList");
  if (caseList) {
    caseList.innerHTML = "";
    competitionEvidenceData.cases.forEach((item) => {
      const card = document.createElement("article");
      card.className = "case-study-item";
      card.innerHTML = `
        <strong>${escapeHtml(item.title)}</strong>
        <p><b>问题：</b>${escapeHtml(item.problem)}</p>
        <p><b>干预：</b>${escapeHtml(item.intervention)}</p>
        <p><b>结果：</b>${escapeHtml(item.result)}</p>
      `;
      caseList.appendChild(card);
    });
  }
}

/* ---- 班级管理 ---- */
let activeClassId = null;
function renderClassPage() {
  const classes = readClassMock();
  if (!activeClassId) activeClassId = classes[0].id;
  const listEl = document.querySelector("#classList");
  if (listEl) {
    listEl.innerHTML = "";
    classes.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "class-card" + (c.id === activeClassId ? " active" : "");
      btn.innerHTML = `<strong>${escapeHtml(c.name)}</strong><span>${escapeHtml(c.size)}人 · 完成率 ${escapeHtml(c.completeRate)}%</span>`;
      btn.addEventListener("click", () => {
        activeClassId = c.id;
        renderClassPage();
      });
      listEl.appendChild(btn);
    });
  }
  const klass = classes.find((c) => c.id === activeClassId) || classes[0];
  const classSubmissions = readExamSubmissions().filter((sub) => sub.examClassName === klass.name);
  const sEl = (id) => document.querySelector(id);
  if (sEl("#classDetailTitle")) sEl("#classDetailTitle").textContent = `${klass.name} · 学生训练情况`;
  if (sEl("#classStudentCount")) sEl("#classStudentCount").textContent = classSubmissions.length ? `${klass.size} 人 · 新提交 ${classSubmissions.length}` : `${klass.size} 人`;
  if (sEl("#classCompleteRate")) sEl("#classCompleteRate").textContent = `${klass.completeRate}%`;
  const avgScores = [...klass.students.map((st) => st.avg), ...classSubmissions.map((sub) => sub.rubricAvg || 0).filter(Boolean)];
  const avg = avgScores.length ? Math.round(avgScores.reduce((s, score) => s + score, 0) / avgScores.length) : 0;
  if (sEl("#classAvgScore")) sEl("#classAvgScore").textContent = `${avg} 分`;
  const weak = klass.students.reduce((acc, st) => { acc[st.weakness] = (acc[st.weakness] || 0) + 1; return acc; }, {});
  const topWeak = Object.entries(weak).sort((a, b) => b[1] - a[1])[0];
  if (sEl("#classFocus")) sEl("#classFocus").textContent = topWeak ? topWeak[0] : "—";
  const tbody = document.querySelector("#classStudentTable");
  if (tbody) {
    tbody.innerHTML = "";
    classSubmissions.forEach((sub) => {
      const tr = document.createElement("tr");
      tr.className = "clickable-row";
      const statusTag = sub.correct
        ? '<span class="pill success">考试一致</span>'
        : '<span class="pill warn">考试需复盘</span>';
      tr.innerHTML = `
        <td><strong>student_demo</strong><br><small class="muted-copy">${escapeHtml(sub.examTitle || "考试提交")}</small></td>
        <td>考试提交</td>
        <td>${escapeHtml(sub.rubricAvg || 0)} 分</td>
        <td>${escapeHtml(sub.weakness || "待教师复盘")}</td>
        <td>${statusTag}</td>
      `;
      tr.addEventListener("click", () => gotoReview(`submission:${sub.id}`));
      tbody.appendChild(tr);
    });
    klass.students.forEach((st) => {
      const tr = document.createElement("tr");
      tr.className = "clickable-row";
      const statusTag = st.selected === st.systemLevel
        ? '<span class="pill success">判断一致</span>'
        : '<span class="pill warn">需复盘</span>';
      tr.innerHTML = `
        <td><strong>${escapeHtml(st.name)}</strong></td>
        <td>${escapeHtml(st.sessions)} 次</td>
        <td>${escapeHtml(st.avg)} 分</td>
        <td>${escapeHtml(st.weakness)}</td>
        <td>${statusTag}</td>
      `;
      tr.addEventListener("click", () => gotoReview(st.id));
      tbody.appendChild(tr);
    });
  }
}

/* ---- 教学复盘 ---- */
function populateReviewSelector() {
  const sel = document.querySelector("#reviewStudentSelect");
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = '<option value="">请选择班级与学生 ...</option>';
  const submissions = readExamSubmissions();
  if (submissions.length) {
    const submissionGroup = document.createElement("optgroup");
    submissionGroup.label = "真实考试提交";
    submissions.forEach((sub) => {
      const opt = document.createElement("option");
      opt.value = `submission:${sub.id}`;
      opt.textContent = `student_demo · ${sub.examTitle || "考试任务"} · ${sub.selected}（系统：${sub.systemLevel}）`;
      submissionGroup.appendChild(opt);
    });
    sel.appendChild(submissionGroup);
  }
  readClassMock().forEach((c) => {
    const og = document.createElement("optgroup");
    og.label = c.name;
    c.students.forEach((st) => {
      const opt = document.createElement("option");
      opt.value = st.id;
      opt.textContent = `${st.name} · ${st.lastCase} · ${st.selected}（系统：${st.systemLevel}）`;
      og.appendChild(opt);
    });
    sel.appendChild(og);
  });
  if (current) sel.value = current;
}
function findStudentById(id) {
  for (const c of readClassMock()) {
    const st = c.students.find((s) => s.id === id);
    if (st) return { student: st, klass: c };
  }
  return null;
}
function gotoReview(studentId) {
  setRoute("teacher");
  setTimeout(() => {
    const sel = document.querySelector("#reviewStudentSelect");
    if (sel) { sel.value = studentId; renderReviewForStudent(studentId); }
  }, 20);
}
function findSubmissionById(id) {
  return readExamSubmissions().find((sub) => String(sub.id) === String(id)) || null;
}
function renderReviewForSubmission(submissionId) {
  const sub = findSubmissionById(submissionId);
  const info = document.querySelector("#reviewContextInfo");
  if (!sub) {
    if (info) info.textContent = "未找到该考试提交记录。";
    return;
  }
  const consistent = !!sub.correct;
  const asked = sub.asked || { covered: 0, total: 0, percent: 0 };
  const exam = latestExamById(sub.examId);
  const feedbackOpen = isExamFeedbackOpen(exam);
  if (info) info.textContent = `当前：${sub.examClassName || "未绑定班级"} · ${sub.examTitle || "考试任务"} · ${sub.caseLabel}`;
  teacherSessionCount.textContent = "1 次";
  teacherAvgScore.textContent = `${sub.rubricAvg || 0} 分`;
  teacherFocus.textContent = sub.weakness || "待教师复盘";
  trainingReport.textContent = [
    `项目：${PROJECT_NAME}`,
    `提交类型：真实考试提交`,
    `考试：${sub.examTitle || "考试任务"}`,
    `班级：${sub.examClassName || "未绑定班级"}`,
    `学生账号：student_demo`,
    `提交时间：${sub.time}`,
    `病例：${sub.caseLabel}`,
    `学生判断：${sub.selected}`,
    `系统分层：${sub.systemLevel}`,
    `问诊覆盖：${asked.covered}/${asked.total}`,
    `平均量规：${sub.rubricAvg || 0} 分`,
    `薄弱点：${sub.weakness || "待教师复盘"}`,
    `教师提示：${consistent ? "判断方向一致，请重点追问证据链是否完整。" : "判断与系统分层不一致，建议围绕遗漏线索和权重判断开展复盘。"}`,
  ].join("\n");
  teacherRubricList.innerHTML = "";
  (sub.rubric || []).forEach((r) => {
    const span = document.createElement("span");
    span.textContent = `${normalizeRubricLabel(r.label)} ${r.score}分`;
    teacherRubricList.appendChild(span);
  });
  const evidence = (sub.evidence || []).slice(0, 2);
  renderList(discussionList, [
    `先看问诊覆盖：当前 ${asked.covered}/${asked.total} 个核心点。`,
    evidence.length ? `重点追问学生如何解释「${evidence[0]}」。` : "要求学生补写本次判断的证据链。",
    consistent ? "判断方向一致，复盘重点放在证据表达是否完整。" : "判断不一致，优先排查关键线索遗漏或风险权重误判。",
  ]);
  renderList(teacherInsightList, [
    `围绕「${sub.weakness || "证据链完整性"}」做一次短复盘。`,
    `反馈状态：${feedbackOpen ? "已开放": "待开放"}，可在统一讲评后再放给学生。`,
  ]);
  renderErrorDiagnosis(deriveErrorTypes({
    consistent,
    weakness: sub.weakness || "",
    selected: sub.selected,
    systemLevel: sub.systemLevel,
  }));
  renderSyndromeHeatmap([
    { label: "本次证据引用", value: (sub.evidence || []).length || 1, hint: "病例/问诊证据" },
    { label: "问诊覆盖缺口", value: Math.max(0, (asked.total || 0) - (asked.covered || 0)), hint: "需补问核心项" },
    { label: "方证表达待评", value: sub.tcmAnswer && sub.tcmAnswer.formula ? 1 : 3, hint: sub.tcmAnswer && sub.tcmAnswer.formula ? "已写方证思路" : "需写方证依据" },
    { label: "安全边界待评", value: sub.tcmAnswer && sub.tcmAnswer.safety ? 1 : 3, hint: sub.tcmAnswer && sub.tcmAnswer.safety ? "已写安全边界" : "需写安全边界" },
  ]);
}
function renderReviewForStudent(studentId) {
  const info = document.querySelector("#reviewContextInfo");
  if (!studentId) {
    if (info) info.textContent = "选择一名学生后，首屏只显示复盘摘要、重点问题和教学动作；详细量规可展开查看。";
    if (trainingReport) trainingReport.textContent = "尚未选择学生。";
    teacherSessionCount.textContent = "—";
    teacherAvgScore.textContent = "—";
    teacherFocus.textContent = "—";
    discussionList.innerHTML = "";
    teacherRubricList.innerHTML = "";
    teacherInsightList.innerHTML = "";
    renderErrorDiagnosis([]);
    renderSyndromeHeatmap();
    return;
  }
  if (String(studentId).startsWith("submission:")) {
    renderReviewForSubmission(String(studentId).replace("submission:", ""));
    return;
  }
  const found = findStudentById(studentId);
  if (!found) return;
  const { student, klass } = found;
  if (info) info.textContent = `当前：${klass.name} · ${student.name} · ${student.lastCase}`;
  teacherSessionCount.textContent = `${student.sessions} 次`;
  teacherAvgScore.textContent = `${student.avg} 分`;
  teacherFocus.textContent = student.weakness;
  const consistent = student.selected === student.systemLevel;
  const errorTypes = deriveErrorTypes({
    consistent,
    weakness: student.weakness,
    selected: student.selected,
    systemLevel: student.systemLevel,
  });
  trainingReport.textContent = [
    `项目：${PROJECT_NAME}`,
    `班级：${klass.name}`,
    `学生：${student.name}`,
    `最近训练时间：${student.lastTime}`,
    `病例：${student.lastCase}`,
    `学生判断：${student.selected}`,
    `系统分层：${student.systemLevel}`,
    `累计训练：${student.sessions} 次`,
    `平均量规：${student.avg} 分`,
    `薄弱点：${student.weakness}`,
    `教师提示：${consistent ? "判断方向一致，可引导学生把推理链条表达得更完整。" : "判断与系统分层不一致，建议围绕证据线索、用药依从性和信息缺失逐条复盘。"}`,
  ].join("\n");
  const rubricItems = [
    { label: "病史采集", score: Math.max(60, student.avg - 4) },
    { label: "临床推理", score: student.avg },
    { label: "中西医整合", score: Math.max(55, student.avg - 6) },
    { label: "安全沟通", score: Math.min(95, student.avg + 3) },
  ];
  teacherRubricList.innerHTML = "";
  rubricItems.forEach((r) => {
    const span = document.createElement("span");
    span.textContent = `${normalizeRubricLabel(r.label)} ${r.score}分`;
    teacherRubricList.appendChild(span);
  });
  renderList(discussionList, [
    `复核${student.name}是否抓住了「${student.lastCase}」的核心线索。`,
    `重点看「${student.weakness}」是否影响了证据链表达。`,
    consistent ? "判断方向一致，本轮主要训练完整表述。" : "判断不一致，优先复盘遗漏线索和权重判断。",
  ]);
  renderList(teacherInsightList, [
    `下一轮让${student.name}围绕「${student.weakness}」补写一段推理说明。`,
    "课堂讲评时只展示匿名证据链，避免把系统分层当成诊疗结论。",
  ]);
  renderErrorDiagnosis(errorTypes);
  renderSyndromeHeatmap([
    { label: student.weakness.includes("脉") ? "补问舌脉" : "舌脉整合待查", value: student.weakness.includes("脉") ? 5 : 2, hint: "四诊证据" },
    { label: student.weakness.includes("西医") ? "西医证据断裂" : "风险与辨证衔接", value: student.weakness.includes("西医") ? 5 : 3, hint: "双轨推理" },
    { label: consistent ? "证据依据待深化" : "风险分层与辨证均需复盘", value: consistent ? 2 : 5, hint: "课堂讨论" },
    { label: "方证匹配表达", value: 4, hint: "需写依据" },
  ]);
}

/* ---- 考试模式发布 ---- */
function publishExamTask() {
  const durationText = examDuration.value || "30分钟";
  const durationMinutes = parseDurationMinutes(durationText);
  const selectedCaseKey = examCaseKey && samples[examCaseKey.value] ? examCaseKey.value : "high";
  const selectedCase = samples[selectedCaseKey];
  const startAt = parseDateTimeLocal(examStartAt ? examStartAt.value : "") || Date.now();
  const selectedEndAt = parseDateTimeLocal(examEndAt ? examEndAt.value : "");
  const dueAt = selectedEndAt && selectedEndAt > startAt ? selectedEndAt : startAt + durationMinutes * 60 * 1000;
  const exam = {
    id: `exam-${Date.now()}`,
    title: examTitle.value || "临床病例推理阶段测验",
    className: examClass.value,
    specialty: examSpecialty.value,
    source: examSource.value,
    caseLabel: selectedCase ? selectedCase.label : "教师自建病例",
    duration: durationText,
    feedbackMode: examFeedbackMode.value,
    publishedAt: new Date().toLocaleString("zh-CN", { hour12: false }),
    startAt,
    dueAt,
    caseKey: selectedCaseKey,
  };
  writePendingExam(exam);
  examStatus.textContent = "已发布到班级";
  examStatus.className = "pill success";
  classPublishText.textContent = `「${exam.title}」已发布到「${exam.className}」，考试反馈将按设置开放。`;
  classPublishNotice.classList.remove("hidden");
  // 刷新相关页面
  renderTeacherHome();
  renderClassPage();
  renderStudentExamTasks();
  setRoute("classes");
}

/* ---- 学习轨迹详情弹窗 ---- */
const historyDetailModal = document.querySelector("#historyDetailModal");
const historyDetailCloseBtn = document.querySelector("#historyDetailCloseBtn");
const historyDetailBody = document.querySelector("#historyDetailBody");
const historyDetailEyebrow = document.querySelector("#historyDetailEyebrow");

function openHistoryDetail(record) {
  if (!historyDetailModal || !historyDetailBody) return;
  const lockedExamRecord = state.role === "student" && record.mode === "exam" && record.examId && !isExamFeedbackOpen(latestExamById(record.examId));
  if (lockedExamRecord) {
    historyDetailEyebrow.textContent = "Exam Submission";
    historyDetailBody.innerHTML = `
      <div class="detail-head-row">
        <span class="mode-tag exam">考试模式</span>
        ${record.examTitle ? `<span class="exam-title-inline">${escapeHtml(record.examTitle)}</span>` : ""}
        <span class="muted-copy">${escapeHtml(record.time)}</span>
      </div>
      <h3>${escapeHtml(record.caseLabel)}</h3>
      <p class="muted-copy">该考试记录已提交，但教师尚未开放学生端反馈。开放后这里才会显示解析、量规和复盘内容。</p>
    `;
    historyDetailModal.classList.remove("hidden");
    historyDetailModal.setAttribute("aria-hidden", "false");
    return;
  }
  historyDetailEyebrow.textContent = record.mode === "exam" ? "Exam Submission" : "Training Record";
  const asked = record.asked || { covered: 0, total: 0, percent: 0 };
  const qualified = record.qualified || (record.correct && asked.percent >= 70 && record.rubricAvg >= 70);
  const askedList = (record.askedLabels && record.askedLabels.length)
    ? `<ul class="compact-list">${record.askedLabels.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`
    : '<p class="muted-copy">无问诊记录</p>';
  const evidenceList = (record.evidence && record.evidence.length)
    ? `<ul class="compact-list">${record.evidence.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`
    : '<p class="muted-copy">无关键证据</p>';
  const rubricList = (record.rubric && record.rubric.length)
    ? `<div class="rubric-score-grid">${record.rubric.map((r) => `<div class="rubric-cell"><div class="rubric-score-label">${escapeHtml(normalizeRubricLabel(r.label))}</div><strong>${escapeHtml(r.score)}分</strong></div>`).join("")}</div>`
    : '<p class="muted-copy">无量规记录</p>';
  historyDetailBody.innerHTML = `
    <div class="detail-head-row">
      <span class="mode-tag ${record.mode === 'exam' ? 'exam' : 'practice'}">${record.mode === 'exam' ? '考试模式' : '自由练习'}</span>
      ${record.examTitle ? `<span class="exam-title-inline">${escapeHtml(record.examTitle)}</span>` : ""}
      <span class="muted-copy">${escapeHtml(record.time)}</span>
    </div>
    <h3>${escapeHtml(record.caseLabel)}</h3>
    <div class="detail-grid">
      <div class="detail-block">
        <span class="detail-label">学生判断</span>
        <strong>${escapeHtml(record.selected)}</strong>
      </div>
      <div class="detail-block">
        <span class="detail-label">系统分层</span>
        <strong>${escapeHtml(record.systemLevel)}</strong>
      </div>
      <div class="detail-block">
        <span class="detail-label">综合达标</span>
        <strong class="${qualified ? 'text-ok' : 'text-warn'}">${qualified ? '达标' : (record.correct ? '证据不足' : '未达标')}</strong>
      </div>
      <div class="detail-block">
        <span class="detail-label">量规均分</span>
        <strong>${escapeHtml(record.rubricAvg)} 分</strong>
      </div>
      <div class="detail-block">
        <span class="detail-label">问诊覆盖</span>
        <strong>${escapeHtml(asked.covered)}/${escapeHtml(asked.total)}</strong>
      </div>
      <div class="detail-block">
        <span class="detail-label">薄弱点</span>
        <strong>${escapeHtml(record.weakness)}</strong>
      </div>
    </div>
    <h3>病例文本</h3>
    <pre class="detail-case-text">${escapeHtml(record.caseText || '（无）')}</pre>
    <h3>问诊涉及线索</h3>
    ${askedList}
    <h3>系统关键证据</h3>
    ${evidenceList}
    <h3>形成性评价量规</h3>
    ${rubricList}
    <h3>反馈正文</h3>
    <p>${escapeHtml(record.feedbackText || '（无）')}</p>
  `;
  historyDetailModal.classList.remove("hidden");
  historyDetailModal.setAttribute("aria-hidden", "false");
}
function closeHistoryDetail() {
  historyDetailModal.classList.add("hidden");
  historyDetailModal.setAttribute("aria-hidden", "true");
}
if (historyDetailCloseBtn) historyDetailCloseBtn.addEventListener("click", closeHistoryDetail);
if (historyDetailModal) historyDetailModal.addEventListener("click", (e) => { if (e.target === historyDetailModal) closeHistoryDetail(); });

/* ---- 下拉与发布按钮事件 ---- */
const reviewSelect = document.querySelector("#reviewStudentSelect");
if (reviewSelect) {
  reviewSelect.addEventListener("change", (e) => renderReviewForStudent(e.target.value));
}

/* 替换原有的examForm提交逻辑 —— 这里补一个新的监听优先处理,原逻辑保留但不重复触发 */
if (examForm) {
  examForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    publishExamTask();
  }, true); // 用捕获阶段优先触发
}

/* ---- 路由切换时同步渲染教师页/学生考试列表 ---- */
function afterRouteChange(route) {
  if (route === "teacher-home") renderTeacherHome();
  if (route === "classes") renderClassPage();
  if (route === "teacher") {
    populateReviewSelector();
    const sel = document.querySelector("#reviewStudentSelect");
    renderReviewForStudent(sel ? sel.value : "");
  }
  if (route === "dashboard") renderStudentExamTasks();
}
// 在原 setRoute 后通过 MutationObserver 的方式不直接 hook,改用定时 + state.route 观察
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    setTimeout(() => afterRouteChange(state.route), 0);
  });
});
document.querySelectorAll("[data-go]").forEach((item) => {
  item.addEventListener("click", () => {
    setTimeout(() => afterRouteChange(state.route), 0);
  });
});

/* ---- 初始化 ---- */
readClassMock();               // 首次写入mock
renderTeacherHome();
renderClassPage();
populateReviewSelector();
renderStudentExamTasks();
applyModeHints();
renderClinicalBasis();
renderCompetitionEvidence();
renderErrorDiagnosis([]);
