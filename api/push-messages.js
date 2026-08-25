const COPY = {
  en: {
    restTitle: 'Rest over 💪',
    restBody: 'Time for your next set.',
    testBody: 'Test notification ✅ — this is what alerts look like.',
    dayFallbackTitle: 'Workout planned today',
    dayRoutineSuffix: 'today',
    dayBody: "It's on your plan — let's go 💪",
  },
  de: {
    restTitle: 'Pause vorbei 💪',
    restBody: 'Zeit für den nächsten Satz.',
    testBody: 'Testbenachrichtigung ✅ — so sehen Hinweise aus.',
    dayFallbackTitle: 'Heute steht ein Training an',
    dayRoutineSuffix: 'heute',
    dayBody: 'Steht auf deinem Plan — los 💪',
  },
  es: {
    restTitle: 'Descanso terminado 💪',
    restBody: 'Toca la siguiente serie.',
    testBody: 'Notificación de prueba ✅ — así se ven las alertas.',
    dayFallbackTitle: 'Entrenamiento previsto hoy',
    dayRoutineSuffix: 'hoy',
    dayBody: 'Está en tu plan — vamos 💪',
  },
  fr: {
    restTitle: 'Repos terminé 💪',
    restBody: 'Place à la série suivante.',
    testBody: 'Notification test ✅ — voilà à quoi ressemblent les alertes.',
    dayFallbackTitle: 'Séance prévue aujourd’hui',
    dayRoutineSuffix: 'aujourd’hui',
    dayBody: 'C’est sur ton plan — on y va 💪',
  },
  it: {
    restTitle: 'Riposo finito 💪',
    restBody: 'È il momento della serie successiva.',
    testBody: 'Notifica di prova ✅ — così appaiono gli avvisi.',
    dayFallbackTitle: 'Allenamento in programma oggi',
    dayRoutineSuffix: 'oggi',
    dayBody: 'È nel tuo piano — andiamo 💪',
  },
  pt: {
    restTitle: 'Descanso terminado 💪',
    restBody: 'Hora da próxima série.',
    testBody: 'Notificação de teste ✅ — é assim que os alertas aparecem.',
    dayFallbackTitle: 'Treino planeado para hoje',
    dayRoutineSuffix: 'hoje',
    dayBody: 'Está no teu plano — vamos treinar 💪',
  },
  'pt-BR': {
    restTitle: 'Descanso terminado 💪',
    restBody: 'Hora da próxima série.',
    testBody: 'Notificação de teste ✅ — é assim que os alertas aparecem.',
    dayFallbackTitle: 'Treino planejado para hoje',
    dayRoutineSuffix: 'hoje',
    dayBody: 'Está no seu plano — vamos treinar 💪',
  },
  pl: {
    restTitle: 'Koniec przerwy 💪',
    restBody: 'Czas na następną serię.',
    testBody: 'Powiadomienie testowe ✅ — tak wyglądają alerty.',
    dayFallbackTitle: 'Trening zaplanowany na dziś',
    dayRoutineSuffix: 'dziś',
    dayBody: 'Jest w twoim planie — ruszamy 💪',
  },
  tr: {
    restTitle: 'Dinlenme bitti 💪',
    restBody: 'Sıradaki set zamanı.',
    testBody: 'Test bildirimi ✅ — uyarılar böyle görünür.',
    dayFallbackTitle: 'Bugün antrenman planlı',
    dayRoutineSuffix: 'bugün',
    dayBody: 'Planında var — hadi 💪',
  },
  ru: {
    restTitle: 'Отдых окончен 💪',
    restBody: 'Пора к следующему подходу.',
    testBody: 'Тестовое уведомление ✅ — так выглядят оповещения.',
    dayFallbackTitle: 'Сегодня запланирована тренировка',
    dayRoutineSuffix: 'сегодня',
    dayBody: 'Это в твоём плане — поехали 💪',
  },
  zh: {
    restTitle: '休息结束 💪',
    restBody: '该做下一组了。',
    testBody: '测试通知 ✅ — 提醒就是这样的。',
    dayFallbackTitle: '今天有安排训练',
    dayRoutineSuffix: '今天',
    dayBody: '今天计划里有这项 — 出发 💪',
  },
  ko: {
    restTitle: '휴식 끝 💪',
    restBody: '다음 세트 시간입니다.',
    testBody: '테스트 알림 ✅ — 알림은 이렇게 보입니다.',
    dayFallbackTitle: '오늘 운동이 예정되어 있습니다',
    dayRoutineSuffix: '오늘',
    dayBody: '계획에 있어요 — 갑시다 💪',
  },
  hi: {
    restTitle: 'आराम खत्म 💪',
    restBody: 'अगले सेट का समय।',
    testBody: 'टेस्ट सूचना ✅ — अलर्ट ऐसे दिखते हैं।',
    dayFallbackTitle: 'आज वर्कआउट प्लान है',
    dayRoutineSuffix: 'आज',
    dayBody: 'ये आपके प्लान में है — चलो 💪',
  },
}

const copyFor = lang => COPY[lang] || COPY.en

export function restTimerPush(lang) {
  const copy = copyFor(lang)
  return { title: copy.restTitle, body: copy.restBody, tag: 'rest-timer' }
}

export function testPush(lang) {
  return { title: 'openGym', body: copyFor(lang).testBody, tag: 'test' }
}

export function dayReminderPush(lang, routine) {
  const copy = copyFor(lang)
  return {
    title: routine
      ? `${routine.emoji || '🏋️'} ${routine.name} ${copy.dayRoutineSuffix}`
      : copy.dayFallbackTitle,
    body: copy.dayBody,
    tag: 'day-reminder',
  }
}
