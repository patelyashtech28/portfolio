// =========================================================================
// 1. EXPANDED 24-WORKOUT DATABASE (Covers all filters, ages & conditions)
// =========================================================================
const WORKOUTS = [
  {
    id: "w1",
    title: "Cat-Cow & Pelvic Tilt Spine Relief",
    gender: ["men", "women"],
    ageGroups: ["teens", "adults", "middle-aged", "seniors"],
    ageLabel: "All Ages (13–80+)",
    condition: "back-pain",
    conditionLabel: "Lower Back Pain",
    difficulty: "Beginner",
    duration: "8 Mins",
    calories: "35 kcal",
    equipment: "Yoga Mat / Bed",
    reps: "3 Sets × 12 Reps",
    defaultTimer: 45,
    icon: "fa-person-praying",
    muscles: "Erector spinae, transverse abdominis, pelvic floor",
    breathing: "Inhale deeply as you arch gently; exhale slowly as you round your spine.",
    summary: "Decompresses lumbar vertebrae, eases morning lower-back stiffness, and awakens deep core stabilizers with zero impact.",
    steps: [
      "Kneel on a padded mat with hands directly beneath shoulders and knees under hips (or sit upright in a chair).",
      "Inhale slowly, letting your belly soften downward while lifting your chest slightly forward.",
      "Exhale fully, tucking your tailbone under and gently rounding your mid-to-lower back.",
      "Pause 2 seconds at each end range without forcing into discomfort."
    ],
    safety: "If kneeling bothers your wrists or knees, perform seated pelvic tilts on a firm chair."
  },
  {
    id: "w2",
    title: "Supported Chair Sit-to-Stand Squats",
    gender: ["men", "women"],
    ageGroups: ["middle-aged", "seniors", "adults"],
    ageLabel: "Middle-Aged & Seniors",
    condition: "knee-pain",
    conditionLabel: "Knee & Joint Friendly",
    difficulty: "Beginner",
    duration: "10 Mins",
    calories: "55 kcal",
    equipment: "Sturdy Chair",
    reps: "3 Sets × 10 Reps",
    defaultTimer: 45,
    icon: "fa-chair",
    muscles: "Quadriceps, gluteus maximus, hip stabilizers",
    breathing: "Inhale as you sit back toward the chair; exhale firmly as you stand up.",
    summary: "Builds functional leg strength for effortless stair climbing and standing while protecting sensitive knee cartilage.",
    steps: [
      "Stand in front of a sturdy non-rolling chair with feet shoulder-width apart.",
      "Hinge your hips backward first and lower with control until your glutes lightly touch the seat.",
      "Keep your shins relatively vertical and knees aligned over your second toes.",
      "Drive evenly through both heels to return to a tall standing posture."
    ],
    safety: "Avoid plopping down onto the chair; use armrests for light balance support if needed."
  },
  {
    id: "w3",
    title: "Post-Meal Metabolic Step & March",
    gender: ["men", "women"],
    ageGroups: ["teens", "adults", "middle-aged", "seniors"],
    ageLabel: "All Ages",
    condition: "diabetes",
    conditionLabel: "Diabetes & Blood Sugar",
    difficulty: "Beginner",
    duration: "15 Mins",
    calories: "95 kcal",
    equipment: "Bodyweight Only",
    reps: "4 Rounds × 3 Mins",
    defaultTimer: 180,
    icon: "fa-person-walking",
    muscles: "Calves, quads, glutes, cardiovascular system",
    breathing: "Rhythmic nose-in, mouth-out breathing; you should be able to speak comfortably.",
    summary: "Activates large leg muscles to absorb blood glucose naturally—ideal 15–20 minutes after lunch or dinner.",
    steps: [
      "March briskly in place for 60 seconds, swinging arms smoothly at waist-to-chest height.",
      "Step side-to-side with a gentle knee bend and light arm curls for 60 seconds.",
      "Perform alternating low knee lifts (below hip height) for 60 seconds.",
      "Rest 30 seconds with slow shoulder rolls between rounds."
    ],
    safety: "Keep a glass of water nearby and wear supportive cushioned footwear indoors."
  },
  {
    id: "w4",
    title: "PCOS Hormone-Balance Slow Strength",
    gender: ["women"],
    ageGroups: ["teens", "adults", "middle-aged"],
    ageLabel: "Women (15–50)",
    condition: "pcos",
    conditionLabel: "PCOS / PCOD",
    difficulty: "Intermediate",
    duration: "20 Mins",
    calories: "145 kcal",
    equipment: "Mat Only",
    reps: "3 Rounds × 12 Reps",
    defaultTimer: 45,
    icon: "fa-venus",
    muscles: "Glutes, hamstrings, chest, deep core",
    breathing: "3-second inhale on the lowering phase, 1-second forceful exhale on exertion.",
    summary: "Improves insulin sensitivity and builds lean metabolic tissue using slow-tempo resistance without triggering cortisol spikes.",
    steps: [
      "Tempo Bodyweight Squats: Lower for 3 full seconds, pause 1 second, stand smoothly (12 reps).",
      "Incline or Knee Push-Ups: Lower chest with control keeping elbows at 45 degrees (10 reps).",
      "Alternating Reverse Lunges: Step back gently to protect front knee (10 reps per leg).",
      "Rest 60–75 seconds between rounds to allow full nervous system recovery."
    ],
    safety: "Avoid frantic high-intensity jumping if feeling fatigued; consistency and controlled tempo yield superior hormonal balance."
  },
  {
    id: "w5",
    title: "Heart-Safe Wall Angels & Isometric Press",
    gender: ["men", "women"],
    ageGroups: ["adults", "middle-aged", "seniors"],
    ageLabel: "Adults & Seniors",
    condition: "hypertension",
    conditionLabel: "Hypertension / Heart Health",
    difficulty: "Beginner",
    duration: "10 Mins",
    calories: "45 kcal",
    equipment: "Flat Wall",
    reps: "3 Sets × 10 Reps",
    defaultTimer: 30,
    icon: "fa-heart",
    muscles: "Rhomboids, lower traps, anterior deltoids, pectorals",
    breathing: "Never hold your breath—exhale steadily throughout every press and arm slide.",
    summary: "Improves thoracic mobility and upper-body circulation without heavy overhead straining that spikes blood pressure.",
    steps: [
      "Stand with heels 4 inches from a wall and rest your tailbone, upper back, and head against it.",
      "Raise arms into a 'W' position and slide wrists upward slowly toward a 'Y' within pain-free range.",
      "Bring palms together at sternum level and press gently for 8 seconds while exhaling.",
      "Shake out arms and breathe deeply for 20 seconds between sets."
    ],
    safety: "Stop immediately if you feel lightheaded, dizzy, or short of breath."
  },
  {
    id: "w6",
    title: "Men's Classic Calisthenics Muscle Builder",
    gender: ["men"],
    ageGroups: ["teens", "adults"],
    ageLabel: "Men (16–45)",
    condition: "general",
    conditionLabel: "General Fitness",
    difficulty: "Intermediate",
    duration: "25 Mins",
    calories: "220 kcal",
    equipment: "Bodyweight / Chair",
    reps: "4 Sets × 12–15 Reps",
    defaultTimer: 60,
    icon: "fa-dumbbell",
    muscles: "Pectorals, triceps, anterior delts, quads, core",
    breathing: "Inhale on the eccentric (lowering) phase; exhale powerfully as you push up.",
    summary: "Structured home hypertrophy circuit combining push-up variations, Bulgarian split squats, and core planks.",
    steps: [
      "Standard Push-Ups: 12–15 controlled reps with rigid plank alignment.",
      "Rear-Foot Elevated Split Squats (using a chair): 10 reps per leg.",
      "Pike Shoulder Push-Ups: 8–10 reps focusing on shoulder stability.",
      "Forearm Plank with Glute Squeeze: Hold for 45–60 seconds."
    ],
    safety: "Keep wrists neutral and stop 1–2 reps shy of form breakdown."
  },
  {
    id: "w7",
    title: "Glute Bridge & McGill Big-3 Core Stability",
    gender: ["men", "women"],
    ageGroups: ["adults", "middle-aged", "seniors"],
    ageLabel: "Adults & Seniors",
    condition: "back-pain",
    conditionLabel: "Lower Back Pain",
    difficulty: "Beginner",
    duration: "12 Mins",
    calories: "50 kcal",
    equipment: "Yoga Mat",
    reps: "3 Sets × 10 Reps",
    defaultTimer: 45,
    icon: "fa-bed-pulse",
    muscles: "Gluteus maximus, multifidus, obliques, rectus abdominis",
    breathing: "Maintain steady shallow breaths while keeping abdominal wall gently braced.",
    summary: "Builds a natural 'muscular corset' around your lumbar spine to prevent recurring back spasms.",
    steps: [
      "Glute Bridge: Lie on back, knees bent, lift hips to straight line and hold 3 seconds (12 reps).",
      "Bird-Dog: From hands and knees, extend opposite arm and leg slowly without twisting hips (8 per side).",
      "Modified Curl-Up: Keep one knee bent, hands under lower back, lift head/shoulders 2 inches for 5 seconds."
    ],
    safety: "Keep lower back neutral—never press spine forcefully into the floor or over-arch."
  },
  {
    id: "w8",
    title: "Desk-Worker Neck, Trap & Posture Reset",
    gender: ["men", "women"],
    ageGroups: ["teens", "adults", "middle-aged"],
    ageLabel: "Teens & Adults",
    condition: "posture",
    conditionLabel: "Posture & Neck Relief",
    difficulty: "Beginner",
    duration: "8 Mins",
    calories: "30 kcal",
    equipment: "Bodyweight Only",
    reps: "3 Sets × 10 Reps",
    defaultTimer: 30,
    icon: "fa-user-check",
    muscles: "Deep cervical flexors, mid-trapezius, rear deltoids",
    breathing: "Slow 4-second nasal inhale, 6-second relaxing exhale to release neck tension.",
    summary: "Reverses 'tech-neck' and rounded shoulders caused by prolonged phone and laptop use.",
    steps: [
      "Chin Tucks: Draw head straight back horizontally (creating a gentle double chin) and hold 3 seconds.",
      "Scapular Retractions: Squeeze shoulder blades back and downward away from ears.",
      "Prone 'Y-T-W' Arm Raises: Lie face down on mat and lift thumbs toward ceiling for upper-back endurance.",
      "Doorway Chest Stretch: Hold 20 seconds per side."
    ],
    safety: "Avoid rolling your head in full circles; keep cervical movements linear and gentle."
  },
  {
    id: "w9",
    title: "Low-Impact Joint-Safe Cardio & Mobility",
    gender: ["women", "men"],
    ageGroups: ["middle-aged", "seniors"],
    ageLabel: "Middle-Aged & Seniors",
    condition: "knee-pain",
    conditionLabel: "Knee & Joint Friendly",
    difficulty: "Beginner",
    duration: "15 Mins",
    calories: "90 kcal",
    equipment: "Mat / Chair",
    reps: "3 Rounds × 40s Work",
    defaultTimer: 45,
    icon: "fa-feather-pointed",
    muscles: "Hip abductors, hamstrings, calves, shoulders",
    breathing: "Smooth, continuous breathing throughout all transitions.",
    summary: "Lubricates hip, knee, and ankle joints through controlled range-of-motion drills with zero jumping.",
    steps: [
      "Standing Hip Circles & March: 40 seconds at a comfortable rhythm.",
      "Side-Lying Clam Shells (or Seated Band Abductions): 12 reps per side for outer hip support.",
      "Standing Hamstring Curls: Kick heel gently toward glutes alternating legs for 40 seconds.",
      "Ankle Pumps & Calf Raises holding a chair: 12 slow reps."
    ],
    safety: "Strong outer hips (glute medius) directly reduce inward stress on the knee joint."
  },
  {
    id: "w10",
    title: "Women's Sculpt, Core & Pelvic Floor Tone",
    gender: ["women"],
    ageGroups: ["adults", "middle-aged"],
    ageLabel: "Women (20–55)",
    condition: "general",
    conditionLabel: "General Fitness",
    difficulty: "Intermediate",
    duration: "22 Mins",
    calories: "175 kcal",
    equipment: "Yoga Mat",
    reps: "3 Rounds × 15 Reps",
    defaultTimer: 45,
    icon: "fa-person-dress",
    muscles: "Glutes, inner thighs, transverse core, shoulders",
    breathing: "Exhale and gently lift pelvic floor during the hardest part of each rep.",
    summary: "Balanced full-body toning routine combining Pilates-inspired core control with lower-body sculpting.",
    steps: [
      "Sumo Squats with 2-Second Pulse: 15 reps targeting inner thighs and glutes.",
      "Dead Bug Core Extension: Slowly extend opposite arm and leg while keeping ribs down (12 reps).",
      "Side Plank Hip Dips (from knees or feet): 10 reps per side.",
      "Donkey Kicks & Fire Hydrants: 12 reps per leg."
    ],
    safety: "Focus on keeping your pelvis steady without rocking side-to-side during leg lifts."
  },
  {
    id: "w11",
    title: "Senior Fall-Prevention & Balance Mastery",
    gender: ["men", "women"],
    ageGroups: ["seniors"],
    ageLabel: "Seniors (60+)",
    condition: "general",
    conditionLabel: "General Fitness",
    difficulty: "Beginner",
    duration: "12 Mins",
    calories: "50 kcal",
    equipment: "Kitchen Counter / Chair",
    reps: "2–3 Sets × 10 Reps",
    defaultTimer: 30,
    icon: "fa-person-cane",
    muscles: "Ankle stabilizers, tibialis anterior, hip abductors",
    breathing: "Calm, unhurried breathing; look straight ahead at a fixed point for balance.",
    summary: "Sharpens proprioception, ankle reflexes, and single-leg stability to boost daily walking confidence.",
    steps: [
      "Stand beside a sturdy kitchen counter with one hand hovering just above it.",
      "Tandem Stance (Heel-to-Toe): Place one foot directly in front of the other and hold 15–20 seconds.",
      "Heel-to-Toe Rockers: Rise onto balls of feet, then gently rock back onto heels (10 reps).",
      "Single-Leg Stand: Lift one foot 2 inches off the floor for 10 seconds per side."
    ],
    safety: "Always practice next to a solid wall or counter so you can steady yourself instantly."
  },
  {
    id: "w12",
    title: "High-Energy Athletic HIIT & Conditioning",
    gender: ["men", "women"],
    ageGroups: ["teens", "adults"],
    ageLabel: "Teens & Adults (16–40)",
    condition: "general",
    conditionLabel: "General Fitness",
    difficulty: "Advanced",
    duration: "20 Mins",
    calories: "260 kcal",
    equipment: "Bodyweight Only",
    reps: "5 Rounds × 40s Work / 20s Rest",
    defaultTimer: 45,
    icon: "fa-fire-flame-curved",
    muscles: "Full body, fast-twitch leg fibers, cardiovascular endurance",
    breathing: "Powerful rhythmic breathing; use the 20-second rest to take deep recovery breaths.",
    summary: "Fast-paced athletic conditioning circuit to skyrocket stamina, agility, and metabolic burn.",
    steps: [
      "Squat Jumps (or Fast Bodyweight Squats): 40 seconds maximum quality reps.",
      "Mountain Climbers: Drive knees toward chest keeping hips level for 40 seconds.",
      "Alternating Jump Lunges (or Crisp Reverse Lunges): 40 seconds.",
      "Burpee Step-Back or Full Burpees: 40 seconds, followed by 60s round rest."
    ],
    safety: "Land softly on the balls of your feet with knees bent; skip jumping variations if you have knee pain."
  },
  {
    id: "w13",
    title: "PCOS & Diabetes Morning Yoga Flow",
    gender: ["women", "men"],
    ageGroups: ["teens", "adults", "middle-aged", "seniors"],
    ageLabel: "All Ages",
    condition: "pcos",
    conditionLabel: "PCOS / PCOD",
    difficulty: "Beginner",
    duration: "18 Mins",
    calories: "80 kcal",
    equipment: "Yoga Mat",
    reps: "5 Poses × 5 Breaths Each",
    defaultTimer: 60,
    icon: "fa-spa",
    muscles: "Hips, groin, spine, parasympathetic nervous system",
    breathing: "Deep diaphragmatic belly breathing (4 seconds in, 6 seconds out).",
    summary: "Reduces stress-induced cortisol, boosts pelvic blood circulation, and improves insulin sensitivity.",
    steps: [
      "Butterfly Pose (Baddha Konasana): Sit tall with soles of feet together, gently fluttering knees for 60s.",
      "Malasana (Supported Garland Squat): Hold deep squat with elbows pressing knees open (or sit on cushion).",
      "Cobra Pose (Bhujangasana): Gentle chest lift to stimulate abdominal organs.",
      "Legs-Up-The-Wall (Viparita Karani): Rest legs vertically against a wall for 3 minutes."
    ],
    safety: "Never bounce aggressively in stretches; let gravity and slow exhales deepen the posture."
  },
  {
    id: "w14",
    title: "Men's 45+ Joint-Smart Strength & Core",
    gender: ["men"],
    ageGroups: ["middle-aged", "seniors"],
    ageLabel: "Men (45–70)",
    condition: "hypertension",
    conditionLabel: "Hypertension / Heart Health",
    difficulty: "Intermediate",
    duration: "20 Mins",
    calories: "155 kcal",
    equipment: "Chair & Mat",
    reps: "3 Sets × 12 Reps",
    defaultTimer: 45,
    icon: "fa-shield-halved",
    muscles: "Chest, upper back, quads, glutes, core",
    breathing: "Exhale smoothly on every push and stand—avoid Valsalva breath-holding.",
    summary: "Maintains testosterone-supporting muscle mass and heart health after 45 without grinding shoulders or knees.",
    steps: [
      "Incline Push-Ups (hands on sturdy table/counter): 12–15 controlled reps.",
      "Box / Chair Goblet-Style Bodyweight Squats: 12 reps with 2-second pause.",
      "Prone Superman Swimmers: Strengthen upper and lower back without weights (10 reps).",
      "Standing Cross-Body Knee-to-Elbow March: 45 seconds steady cardio."
    ],
    safety: "Keep movements rhythmic and controlled; stay hydrated throughout."
  },
  {
    id: "w15",
    title: "Diabetes Resistance Band / Bodyweight Circuit",
    gender: ["men", "women"],
    ageGroups: ["adults", "middle-aged", "seniors"],
    ageLabel: "Adults & Seniors",
    condition: "diabetes",
    conditionLabel: "Diabetes & Blood Sugar",
    difficulty: "Intermediate",
    duration: "20 Mins",
    calories: "160 kcal",
    equipment: "Bodyweight / Towel",
    reps: "3 Rounds × 12 Reps",
    defaultTimer: 45,
    icon: "fa-droplet",
    muscles: "Quads, glutes, lats, chest, calves",
    breathing: "Steady exhales on exertion; avoid holding breath.",
    summary: "Combines multi-joint muscle contractions to create long-lasting insulin sensitivity for up to 24 hours.",
    steps: [
      "Wall Sit Hold: Slide back down a wall to a comfortable knee angle and hold 30–45 seconds.",
      "Wall or Counter Push-Ups: 12–15 steady reps.",
      "Towel Lat Pull-Downs: Pull a bath towel taut overhead and pull down behind/in front of chin (12 reps).",
      "Standing Calf Raises: 15 reps to pump lower-leg circulation."
    ],
    safety: "Check feet daily for comfort and avoid exercising if blood glucose is excessively high or low."
  },
  {
    id: "w16",
    title: "Teens Athletic Posture, Speed & Core",
    gender: ["men", "women"],
    ageGroups: ["teens"],
    ageLabel: "Teens & Youth (13–19)",
    condition: "posture",
    conditionLabel: "Posture & Neck Relief",
    difficulty: "Intermediate",
    duration: "16 Mins",
    calories: "150 kcal",
    equipment: "Bodyweight Only",
    reps: "3 Rounds × 12 Reps",
    defaultTimer: 45,
    icon: "fa-bolt",
    muscles: "Core, upper back, hip flexors, agile leg stabilizers",
    breathing: "Crisp, athletic breathing through nose and mouth.",
    summary: "Builds coordination, core stability, and upright posture for students spending hours at desks or playing sports.",
    steps: [
      "Inchworm Walkouts: Hinge at hips, walk hands out to plank, walk back and stand tall (8 reps).",
      "Lateral Skater Steps: Bound or step wide side-to-side for 40 seconds.",
      "Prone 'Y' & 'W' Back Extensions: 12 reps to counteract backpack slouching.",
      "Plank Shoulder Taps: Keep hips rock-solid while tapping opposite shoulder (16 taps)."
    ],
    safety: "Focus on clean, controlled form rather than rushing through reps."
  },
  {
    id: "w17",
    title: "Advanced Full-Body Core & Calisthenics Flow",
    gender: ["men", "women"],
    ageGroups: ["adults"],
    ageLabel: "Adults (20–45)",
    condition: "general",
    conditionLabel: "General Fitness",
    difficulty: "Advanced",
    duration: "28 Mins",
    calories: "275 kcal",
    equipment: "Yoga Mat",
    reps: "4 Rounds × 10–15 Reps",
    defaultTimer: 60,
    icon: "fa-trophy",
    muscles: "Core, shoulders, chest, hamstrings, glutes",
    breathing: "Controlled bracing breaths during planks; forceful exhales on explosive reps.",
    summary: "Challenging bodyweight strength and core mastery session with zero equipment required.",
    steps: [
      "Decline or Archer Push-Ups: 10–12 reps per set.",
      "Single-Leg Glute Bridge: 12 reps per leg with 2-second top squeeze.",
      "Hollow Body Hold: Press lower back into mat with arms and legs extended for 30–45s.",
      "Reverse Lunge to High Knee Drive: 12 dynamic reps per side."
    ],
    safety: "Ensure a 3-minute warm-up of arm circles and hip hinges before starting."
  },
  {
    id: "w18",
    title: "Evening Stress-Melt & Blood Pressure Down-Regulator",
    gender: ["men", "women"],
    ageGroups: ["adults", "middle-aged", "seniors"],
    ageLabel: "All Adults & Seniors",
    condition: "hypertension",
    conditionLabel: "Hypertension / Heart Health",
    difficulty: "Beginner",
    duration: "12 Mins",
    calories: "40 kcal",
    equipment: "Mat or Bed",
    reps: "5 Gentle Stretches × 45s",
    defaultTimer: 45,
    icon: "fa-moon",
    muscles: "Parasympathetic nervous system, upper back, hips, calves",
    breathing: "Box or 4-7-8 gentle breathing—prolonged exhales help lower heart rate.",
    summary: "Calms sympathetic nervous tension in the evening, helping relax blood vessels and prepare for restorative sleep.",
    steps: [
      "Seated Neck & Upper Trap Release: Gently tilt ear toward shoulder for 30s per side.",
      "Supine Figure-4 Piriformis Stretch: Cross ankle over opposite knee to release hip/back tension.",
      "Open-Book Thoracic Twist: Lie on side and open top arm gently to stretch chest.",
      "Diaphragmatic Breathing: One hand on chest, one on belly for 2 full minutes."
    ],
    safety: "Keep head slightly elevated on a pillow if lying completely flat feels uncomfortable."
  },
  // ADDITIONAL 6 WORKOUTS TO ENSURE 100% COVERAGE FOR ALL FILTER COMBINATIONS
  {
    id: "w19",
    title: "Men's Advanced Back-Pain Safe Core & Stability",
    gender: ["men"],
    ageGroups: ["adults", "middle-aged"],
    ageLabel: "Men (25–55)",
    condition: "back-pain",
    conditionLabel: "Lower Back Pain",
    difficulty: "Intermediate",
    duration: "18 Mins",
    calories: "120 kcal",
    equipment: "Yoga Mat",
    reps: "3 Rounds × 12 Reps",
    defaultTimer: 45,
    icon: "fa-shield",
    muscles: "Transverse abdominis, obliques, glutes",
    breathing: "Brace core before every movement.",
    summary: "Tailored specifically for men with lingering lower back stiffness who want to build a bulletproof midsection.",
    steps: [
      "Side Plank Hold: 30 seconds per side with hips elevated.",
      "Bird-Dog Holds: 10 reps holding each extension for 3 seconds.",
      "Dead Bug with Neutral Spine: 12 alternating reps."
    ],
    safety: "Stop if you feel any pinching in the lumbar region."
  },
  {
    id: "w20",
    title: "Women's Gentle Back Relief & Posture Flow",
    gender: ["women"],
    ageGroups: ["teens", "adults", "middle-aged", "seniors"],
    ageLabel: "Women (All Ages)",
    condition: "back-pain",
    conditionLabel: "Lower Back Pain",
    difficulty: "Beginner",
    duration: "14 Mins",
    calories: "60 kcal",
    equipment: "Yoga Mat",
    reps: "3 Rounds",
    defaultTimer: 45,
    icon: "fa-spa",
    muscles: "Lower back, hamstrings, upper back",
    breathing: "Deep relaxing exhales on every forward fold.",
    summary: "Gentle restorative flow designed to release tension in the lower back and shoulders for women.",
    steps: [
      "Child's Pose Reach: Extended child's pose holding for 60 seconds.",
      "Supine Knee-to-Chest Hug: Gentle rocking side-to-side.",
      "Cat-Cow Mobility: 12 slow reps."
    ],
    safety: "Move only within a comfortable, pain-free range."
  },
  {
    id: "w21",
    title: "Teens Knee-Safe Agility & Lower Body",
    gender: ["men", "women"],
    ageGroups: ["teens"],
    ageLabel: "Teens (13–19)",
    condition: "knee-pain",
    conditionLabel: "Knee & Joint Friendly",
    difficulty: "Intermediate",
    duration: "15 Mins",
    calories: "130 kcal",
    equipment: "Bodyweight",
    reps: "3 Rounds",
    defaultTimer: 45,
    icon: "fa-bolt",
    muscles: "Quads, glutes, hamstrings, calves",
    breathing: "Controlled athletic breathing.",
    summary: "Safely builds explosive leg strength and coordination for growing youth without overloading joint cartilage.",
    steps: [
      "Shallow Controlled Squats: 15 reps.",
      "Glute Bridges: 15 reps.",
      "Standing Calf Raises: 20 reps."
    ],
    safety: "Maintain proper knee tracking over toes at all times."
  },
  {
    id: "w22",
    title: "Advanced Diabetes & Heart Metabolic Circuit",
    gender: ["men", "women"],
    ageGroups: ["adults", "middle-aged"],
    ageLabel: "Adults (20–55)",
    condition: "diabetes",
    conditionLabel: "Diabetes & Blood Sugar",
    difficulty: "Advanced",
    duration: "25 Mins",
    calories: "240 kcal",
    equipment: "Bodyweight",
    reps: "4 Rounds",
    defaultTimer: 60,
    icon: "fa-fire",
    muscles: "Full body, cardiovascular system",
    breathing: "Steady rhythmic breathing throughout.",
    summary: "High-burn metabolic conditioning designed to maximize glucose disposal and insulin sensitivity.",
    steps: [
      "Bodyweight Squats: 20 reps.",
      "Incline Push-Ups: 15 reps.",
      "High Knees in Place: 45 seconds."
    ],
    safety: "Monitor hydration and heart rate closely during exercise."
  },
  {
    id: "w23",
    title: "Men's Posture & Upper-Back Correction",
    gender: ["men"],
    ageGroups: ["teens", "adults", "middle-aged"],
    ageLabel: "Men (Teens to Adults)",
    condition: "posture",
    conditionLabel: "Posture & Neck Relief",
    difficulty: "Intermediate",
    duration: "15 Mins",
    calories: "90 kcal",
    equipment: "Wall / Bodyweight",
    reps: "3 Sets",
    defaultTimer: 45,
    icon: "fa-user-tie",
    muscles: "Rhomboids, rear delts, traps",
    breathing: "Inhale as you open chest, exhale as you contract.",
    summary: "Combat desk hunch and round shoulders with targeted upper-back strengthening for men.",
    steps: [
      "Wall Angels: 12 strict reps against a flat wall.",
      "Prone Y-Raises: 12 reps.",
      "Doorway Stretch: 30 seconds per side."
    ],
    safety: "Keep chin tucked and avoid shrugging traps toward ears."
  },
  {
    id: "w24",
    title: "Women's Advanced Core & Fat Loss Burner",
    gender: ["women"],
    ageGroups: ["adults"],
    ageLabel: "Women (20–45)",
    condition: "general",
    conditionLabel: "General Fitness",
    difficulty: "Advanced",
    duration: "25 Mins",
    calories: "230 kcal",
    equipment: "Yoga Mat",
    reps: "4 Rounds",
    defaultTimer: 45,
    icon: "fa-fire-flame-curved",
    muscles: "Core, glutes, full body",
    breathing: "Forceful exhales on every contraction.",
    summary: "Challenging bodyweight conditioning routine tailored for women seeking core definition and stamina.",
    steps: [
      "Jump Squats (or Deep Squats): 15 reps.",
      "Plank to Dolphin Pose: 12 reps.",
      "Alternating Reverse Lunges: 20 reps."
    ],
    safety: "Listen to your body and take short rests between rounds as needed."
  }
];

// =========================================================================
// STATE & LOCAL STORAGE MANAGEMENT
// =========================================================================
const STORAGE_KEY = "Muscle & Meal_saved_workouts_v1";
let savedIds = [];
try {
  savedIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
} catch (e) {
  savedIds = [];
}

const filters = {
  gender: "all",
  age: "all",
  condition: "all",
  difficulty: "all",
  search: "",
  onlySaved: false
};

let activeModalWorkout = null;

// =========================================================================
// BUILT-IN AUDIO + VISUAL TIMER LOGIC (Web Audio API Chime)
// =========================================================================
let timerDuration = 45;
let timerRemaining = 45;
let timerInterval = null;
let timerRunning = false;
const RING_CIRCUMFERENCE = 2 * Math.PI * 34;

const timerDisplay = document.getElementById("timer-display");
const timerRing = document.getElementById("timer-ring");
const timerStartBtn = document.getElementById("timer-start-btn");
const timerStartIcon = document.getElementById("timer-start-icon");
const timerStartText = document.getElementById("timer-start-text");
const timerPresetLabel = document.getElementById("timer-preset-label");

function playCompletionChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.14);
      gain.gain.setValueAtTime(0.18, ctx.currentTime + i * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.14 + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.14);
      osc.stop(ctx.currentTime + i * 0.14 + 0.52);
    });
  } catch (err) {}
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimerUI() {
  timerDisplay.textContent = formatSeconds(timerRemaining);
  const fraction = timerDuration > 0 ? timerRemaining / timerDuration : 0;
  const offset = RING_CIRCUMFERENCE * (1 - fraction);
  timerRing.style.strokeDashoffset = offset;
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerRunning = false;
  timerStartIcon.className = "fa-solid fa-play";
  timerStartText.textContent = "Start";
  timerStartBtn.classList.remove("bg-amber-500", "hover:bg-amber-600");
  timerStartBtn.classList.add("bg-emerald-600", "hover:bg-emerald-700");
}

function setTimerPreset(seconds) {
  stopTimer();
  timerDuration = seconds;
  timerRemaining = seconds;
  timerPresetLabel.textContent = seconds >= 60 ? `${seconds / 60} Min Guided Interval` : `${seconds}s Active Interval`;
  updateTimerUI();

  document.querySelectorAll(".timer-preset-btn").forEach(btn => {
    const isSelected = Number(btn.dataset.seconds) === seconds;
    btn.className = isSelected
      ? "timer-preset-btn px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold cursor-pointer"
      : "timer-preset-btn px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-emerald-500 cursor-pointer";
  });
}

timerStartBtn.addEventListener("click", () => {
  if (timerRunning) {
    stopTimer();
    timerStartText.textContent = "Resume";
    return;
  }

  if (timerRemaining <= 0) {
    timerRemaining = timerDuration;
  }

  timerRunning = true;
  timerStartIcon.className = "fa-solid fa-pause";
  timerStartText.textContent = "Pause";
  timerStartBtn.classList.remove("bg-emerald-600", "hover:bg-emerald-700");
  timerStartBtn.classList.add("bg-amber-500", "hover:bg-amber-600");

  timerInterval = setInterval(() => {
    timerRemaining--;
    updateTimerUI();

    if (timerRemaining <= 0) {
      stopTimer();
      timerPresetLabel.textContent = "Interval Complete! Great job!";
      playCompletionChime();
    }
  }, 1000);
});

document.getElementById("timer-reset-btn").addEventListener("click", () => {
  stopTimer();
  timerRemaining = timerDuration;
  timerPresetLabel.textContent = timerDuration >= 60 ? `${timerDuration / 60} Min Guided Interval` : `${timerDuration}s Active Interval`;
  updateTimerUI();
});

document.querySelectorAll(".timer-preset-btn").forEach(btn => {
  btn.addEventListener("click", () => setTimerPreset(Number(btn.dataset.seconds)));
});

// =========================================================================
// BOOKMARK / FAVORITE WORKOUTS (localStorage)
// =========================================================================
function persistSaved() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  } catch (e) {}
  updateSavedBadges();
}

function updateSavedBadges() {
  document.getElementById("saved-count-badge").textContent = savedIds.length;
  const filterBtn = document.getElementById("toggle-saved-filter");
  const filterIcon = document.getElementById("saved-filter-icon");

  if (filters.onlySaved) {
    filterBtn.classList.add("bg-rose-50", "border-rose-300", "text-rose-700");
    filterBtn.classList.remove("bg-white", "border-slate-200", "text-slate-700");
    filterIcon.className = "fa-solid fa-heart text-rose-600";
  } else {
    filterBtn.classList.remove("bg-rose-50", "border-rose-300", "text-rose-700");
    filterBtn.classList.add("bg-white", "border-slate-200", "text-slate-700");
    filterIcon.className = "fa-regular fa-heart text-rose-500";
  }
}

window.toggleBookmark = function(id, event) {
  if (event) event.stopPropagation();
  const idx = savedIds.indexOf(id);
  if (idx === -1) {
    savedIds.push(id);
  } else {
    savedIds.splice(idx, 1);
  }
  persistSaved();
  renderWorkouts();
  if (activeModalWorkout && activeModalWorkout.id === id) {
    updateModalSaveButton(id);
  }
};

function updateModalSaveButton(id) {
  const btn = document.getElementById("modal-save-btn");
  const isSaved = savedIds.includes(id);
  btn.innerHTML = isSaved
    ? `<i class="fa-solid fa-heart text-rose-600"></i> <span class="text-rose-700">Saved</span>`
    : `<i class="fa-regular fa-heart"></i> <span>Save</span>`;
  btn.className = isSaved
    ? "px-3.5 py-2 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
    : "px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-rose-50 text-slate-600 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer";
}

// =========================================================================
// RENDER WORKOUT CARDS
// =========================================================================
function getDifficultyBadge(level) {
  if (level === "Beginner") return "bg-emerald-50 text-emerald-700 border-emerald-200/80";
  if (level === "Intermediate") return "bg-sky-50 text-sky-700 border-sky-200/80";
  return "bg-orange-50 text-orange-700 border-orange-200/80";
}

function renderWorkouts() {
  const grid = document.getElementById("workouts-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  const summaryEl = document.getElementById("active-filter-summary");

  const query = filters.search.trim().toLowerCase();

  const filtered = WORKOUTS.filter(w => {
    const matchGender = filters.gender === "all" || w.gender.includes(filters.gender);
    const matchAge = filters.age === "all" || w.ageGroups.includes(filters.age);
    const matchCondition = filters.condition === "all" || w.condition === filters.condition;
    const matchDifficulty = filters.difficulty === "all" || w.difficulty === filters.difficulty;
    const matchSaved = !filters.onlySaved || savedIds.includes(w.id);
    const matchSearch = !query ||
      w.title.toLowerCase().includes(query) ||
      w.conditionLabel.toLowerCase().includes(query) ||
      w.muscles.toLowerCase().includes(query) ||
      w.equipment.toLowerCase().includes(query) ||
      w.summary.toLowerCase().includes(query);

    return matchGender && matchAge && matchCondition && matchDifficulty && matchSaved && matchSearch;
  });

  resultsCount.textContent = filtered.length;
  summaryEl.textContent = filters.onlySaved ? "(Showing bookmarked routines)" : "";

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  grid.innerHTML = filtered.map(w => {
    const isSaved = savedIds.includes(w.id);
    const genderText = w.gender.length === 2 ? "Men & Women" : (w.gender[0] === "men" ? "Men" : "Women");

    return `
      <article onclick="openWorkoutModal('${w.id}')" class="group bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer">
        <div>
          <!-- Top Row: Icon, Condition Tag & Bookmark Button -->
          <div class="flex items-start justify-between gap-2 mb-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center text-xl shrink-0">
              <i class="fa-solid ${w.icon}"></i>
            </div>

            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border ${getDifficultyBadge(w.difficulty)}">${w.difficulty}</span>
              <button type="button" onclick="toggleBookmark('${w.id}', event)" aria-label="Save Workout" class="w-8 h-8 rounded-full border ${isSaved ? "bg-rose-50 border-rose-200 text-rose-600" : "bg-slate-50 border-slate-200 text-slate-400 hover:text-rose-500"} flex items-center justify-center transition-colors cursor-pointer">
                <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart text-xs"></i>
              </button>
            </div>
          </div>

          <!-- Condition Highlight Pill -->
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50/90 text-amber-800 border border-amber-200/70 text-[11px] font-bold mb-2">
            <i class="fa-solid fa-notes-medical text-amber-600"></i>
            <span>${w.conditionLabel}</span>
          </div>

          <!-- Title & Summary -->
          <h2 class="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
            ${w.title}
          </h2>
          <p class="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">${w.summary}</p>

          <!-- Demographic Pills -->
          <div class="mt-4 flex flex-wrap gap-1.5 text-[11px] font-semibold text-slate-600">
            <span class="bg-slate-100 px-2.5 py-1 rounded-lg">
              <i class="fa-solid fa-venus-mars text-slate-400 mr-1"></i>${genderText}
            </span>
            <span class="bg-slate-100 px-2.5 py-1 rounded-lg">
              <i class="fa-solid fa-users text-slate-400 mr-1"></i>${w.ageLabel}
            </span>
          </div>
        </div>

        <!-- Bottom Specs & Action CTA -->
        <div class="mt-6 pt-4 border-t border-slate-100">
          <div class="grid grid-cols-3 gap-2 text-center bg-[#F8FAFC] rounded-2xl p-2.5 mb-4">
            <div>
              <div class="text-[10px] font-bold uppercase text-slate-400">Duration</div>
              <div class="text-xs font-bold text-slate-800 mt-0.5">${w.duration}</div>
            </div>
            <div class="border-x border-slate-200/80">
              <div class="text-[10px] font-bold uppercase text-slate-400">Est. Burn</div>
              <div class="text-xs font-bold text-orange-600 mt-0.5">${w.calories}</div>
            </div>
            <div>
              <div class="text-[10px] font-bold uppercase text-slate-400">Equipment</div>
              <div class="text-xs font-bold text-emerald-700 mt-0.5 truncate px-1">${w.equipment}</div>
            </div>
          </div>

          <button type="button" class="w-full py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <i class="fa-solid fa-play text-xs"></i>
            <span>Start Workout / View Guide</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// =========================================================================
// MODAL OPEN / CLOSE HANDLERS
// =========================================================================
const modal = document.getElementById("workout-modal");

window.openWorkoutModal = function(id) {
  const w = WORKOUTS.find(item => item.id === id);
  if (!w) return;
  activeModalWorkout = w;

  const genderText = w.gender.length === 2 ? "Men & Women" : (w.gender[0] === "men" ? "Men" : "Women");

  document.getElementById("modal-badges").innerHTML = `
    <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${getDifficultyBadge(w.difficulty)}">${w.difficulty}</span>
    <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">${w.conditionLabel}</span>
    <span class="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">${genderText}</span>
  `;

  document.getElementById("modal-title").textContent = w.title;
  document.getElementById("modal-summary").textContent = w.summary;
  document.getElementById("modal-reps").textContent = w.reps;
  document.getElementById("modal-duration").textContent = w.duration;
  document.getElementById("modal-calories").textContent = w.calories;
  document.getElementById("modal-equipment").textContent = w.equipment;
  document.getElementById("modal-muscles").textContent = w.muscles;
  document.getElementById("modal-breathing").textContent = w.breathing;
  document.getElementById("modal-safety").textContent = w.safety;

  document.getElementById("modal-steps").innerHTML = w.steps.map((step, i) => `
    <li class="flex items-start gap-3 text-sm text-slate-700 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
      <span class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${i + 1}</span>
      <span class="leading-relaxed">${step}</span>
    </li>
  `).join("");

  updateModalSaveButton(w.id);
  setTimerPreset(w.defaultTimer || 45);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

function closeWorkoutModal() {
  stopTimer();
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
  activeModalWorkout = null;
}

document.getElementById("close-modal-btn").addEventListener("click", closeWorkoutModal);
document.getElementById("modal-save-btn").addEventListener("click", () => {
  if (activeModalWorkout) toggleBookmark(activeModalWorkout.id);
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeWorkoutModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeWorkoutModal();
});

// =========================================================================
// FILTER EVENT LISTENERS
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateSavedBadges();
  renderWorkouts();

  // Mobile Menu Toggle
  document.getElementById("mobile-menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  // Gender Buttons
  document.querySelectorAll(".gender-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gender-btn").forEach(b => {
        b.className = "gender-btn py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-600 hover:text-slate-900 cursor-pointer";
      });
      btn.className = "gender-btn py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all bg-white text-emerald-700 shadow-sm cursor-pointer";
      filters.gender = btn.dataset.gender;
      renderWorkouts();
    });
  });

  // Age & Difficulty Selects
  const ageSelect = document.getElementById("age-select");
  const diffSelect = document.getElementById("difficulty-select");
  const searchInput = document.getElementById("search-input");

  ageSelect.addEventListener("change", (e) => {
    filters.age = e.target.value;
    renderWorkouts();
  });

  diffSelect.addEventListener("change", (e) => {
    filters.difficulty = e.target.value;
    renderWorkouts();
  });

  // Medical Condition Pills
  document.querySelectorAll(".condition-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".condition-pill").forEach(p => {
        p.className = "condition-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-slate-100 text-slate-700 hover:bg-slate-200/70 cursor-pointer";
      });
      pill.className = "condition-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-emerald-600 text-white shadow-sm cursor-pointer";
      filters.condition = pill.dataset.condition;
      renderWorkouts();
    });
  });

  // Real-Time Search
  searchInput.addEventListener("input", (e) => {
    filters.search = e.target.value;
    renderWorkouts();
  });

  // Saved Workouts Toggle
  function toggleSavedFilterMode() {
    filters.onlySaved = !filters.onlySaved;
    updateSavedBadges();
    renderWorkouts();
  }
  document.getElementById("toggle-saved-filter").addEventListener("click", toggleSavedFilterMode);
  document.getElementById("nav-saved-btn").addEventListener("click", () => {
    if (!filters.onlySaved) {
      filters.onlySaved = true;
      updateSavedBadges();
      renderWorkouts();
    }
    document.getElementById("workouts-grid").scrollIntoView({ behavior: "smooth" });
  });

  // Reset All Filters
  function resetAllFilters() {
    filters.gender = "all";
    filters.age = "all";
    filters.condition = "all";
    filters.difficulty = "all";
    filters.search = "";
    filters.onlySaved = false;

    ageSelect.value = "all";
    diffSelect.value = "all";
    searchInput.value = "";

    document.querySelectorAll(".gender-btn").forEach((b, i) => {
      b.className = i === 0
        ? "gender-btn py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all bg-white text-emerald-700 shadow-sm cursor-pointer"
        : "gender-btn py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-slate-600 hover:text-slate-900 cursor-pointer";
    });

    document.querySelectorAll(".condition-pill").forEach((p, i) => {
      p.className = i === 0
        ? "condition-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-emerald-600 text-white shadow-sm cursor-pointer"
        : "condition-pill px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-slate-100 text-slate-700 hover:bg-slate-200/70 cursor-pointer";
    });

    updateSavedBadges();
    renderWorkouts();
  }

  document.getElementById("reset-filters-btn").addEventListener("click", resetAllFilters);
  document.getElementById("empty-reset-btn").addEventListener("click", resetAllFilters);
});