module.exports = {

"[project]/src/app/noten/page.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "animate": "page-module__ANWkCW__animate",
  "animateStats": "page-module__ANWkCW__animateStats",
  "averageCard": "page-module__ANWkCW__averageCard",
  "averageValue": "page-module__ANWkCW__averageValue",
  "bounce": "page-module__ANWkCW__bounce",
  "buttonLoader": "page-module__ANWkCW__buttonLoader",
  "container": "page-module__ANWkCW__container",
  "countUp": "page-module__ANWkCW__countUp",
  "deleteButton": "page-module__ANWkCW__deleteButton",
  "distributionBar": "page-module__ANWkCW__distributionBar",
  "distributionBarFill": "page-module__ANWkCW__distributionBarFill",
  "distributionCard": "page-module__ANWkCW__distributionCard",
  "distributionCount": "page-module__ANWkCW__distributionCount",
  "distributionGrid": "page-module__ANWkCW__distributionGrid",
  "distributionItem": "page-module__ANWkCW__distributionItem",
  "distributionLabel": "page-module__ANWkCW__distributionLabel",
  "error": "page-module__ANWkCW__error",
  "excellent": "page-module__ANWkCW__excellent",
  "expandWidth": "page-module__ANWkCW__expandWidth",
  "fadeIn": "page-module__ANWkCW__fadeIn",
  "fadeInLeft": "page-module__ANWkCW__fadeInLeft",
  "fadeInRight": "page-module__ANWkCW__fadeInRight",
  "form": "page-module__ANWkCW__form",
  "formGroup": "page-module__ANWkCW__formGroup",
  "formSection": "page-module__ANWkCW__formSection",
  "good": "page-module__ANWkCW__good",
  "gradeActions": "page-module__ANWkCW__gradeActions",
  "gradeDate": "page-module__ANWkCW__gradeDate",
  "gradeExcellent": "page-module__ANWkCW__gradeExcellent",
  "gradeGood": "page-module__ANWkCW__gradeGood",
  "gradeInfo": "page-module__ANWkCW__gradeInfo",
  "gradeInsufficient": "page-module__ANWkCW__gradeInsufficient",
  "gradeItem": "page-module__ANWkCW__gradeItem",
  "gradeSatisfactory": "page-module__ANWkCW__gradeSatisfactory",
  "gradeSubject": "page-module__ANWkCW__gradeSubject",
  "gradeValue": "page-module__ANWkCW__gradeValue",
  "gradesList": "page-module__ANWkCW__gradesList",
  "gradesSection": "page-module__ANWkCW__gradesSection",
  "input": "page-module__ANWkCW__input",
  "insufficient": "page-module__ANWkCW__insufficient",
  "label": "page-module__ANWkCW__label",
  "loaded": "page-module__ANWkCW__loaded",
  "loaderDot": "page-module__ANWkCW__loaderDot",
  "pageDescription": "page-module__ANWkCW__pageDescription",
  "pageHeader": "page-module__ANWkCW__pageHeader",
  "pageTitle": "page-module__ANWkCW__pageTitle",
  "satisfactory": "page-module__ANWkCW__satisfactory",
  "sectionTitle": "page-module__ANWkCW__sectionTitle",
  "slideIn": "page-module__ANWkCW__slideIn",
  "statisticsCard": "page-module__ANWkCW__statisticsCard",
  "statisticsFooter": "page-module__ANWkCW__statisticsFooter",
  "statisticsGrid": "page-module__ANWkCW__statisticsGrid",
  "statisticsHeader": "page-module__ANWkCW__statisticsHeader",
  "statisticsIcon": "page-module__ANWkCW__statisticsIcon",
  "statisticsSection": "page-module__ANWkCW__statisticsSection",
  "statisticsTitle": "page-module__ANWkCW__statisticsTitle",
  "submitButton": "page-module__ANWkCW__submitButton",
});
}}),
"[project]/src/app/noten/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Noten)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/noten/page.module.css [app-ssr] (css module)");
(()=>{
    const e = new Error("Cannot find module '@/components/loading-animation'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
function Noten() {
    const [grades, setGrades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        subject: "",
        grade: ""
    });
    const [deleteConfirmation, setDeleteConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        gradeId: null
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pageLoaded, setPageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animateStats, setAnimateStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Intersection Observer for animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setAnimateStats(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        if (statsRef.current) {
            observer.observe(statsRef.current);
        }
        return ()=>{
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);
    // Fetch grades when the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchGrades() {
            try {
                setIsLoading(true);
                const res = await fetch("/api/grades");
                // Check if the response is JSON
                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error(`Server returned non-JSON response: ${await res.text()}`);
                }
                const data = await res.json();
                if (data.success) {
                    setGrades(data.grades);
                } else {
                    showNotification("error", "Fehler beim Laden", data.error || "Die Noten konnten nicht geladen werden.");
                }
            } catch (error) {
                console.error("Error fetching grades:", error);
                showNotification("error", "Verbindungsfehler", `Fehler beim Laden: ${error.message}`);
            } finally{
                setIsLoading(false);
                setTimeout(()=>{
                    setPageLoaded(true);
                }, 300);
            }
        }
        fetchGrades();
    }, []);
    // Function to show notifications
    const showNotification = (type, title, message)=>{
        const id = Date.now();
        setNotifications((prev)=>[
                ...prev,
                {
                    id,
                    type,
                    title,
                    message
                }
            ]);
        // Auto-remove notification after 3 seconds
        setTimeout(()=>{
            setNotifications((prev)=>prev.filter((notification)=>notification.id !== id));
        }, 3000);
    };
    // Calculate grade average
    const calculateAverage = ()=>{
        if (grades.length === 0) return 0;
        const sum = grades.reduce((total, grade)=>{
            const gradeValue = Number.parseFloat(grade.grade);
            return isNaN(gradeValue) ? total : total + gradeValue;
        }, 0);
        return sum / grades.length;
    };
    // Calculate average per subject
    const calculateSubjectAverages = ()=>{
        const subjects = {};
        grades.forEach((grade)=>{
            const subjectName = grade.subject;
            const gradeValue = Number.parseFloat(grade.grade);
            if (!subjects[subjectName]) {
                subjects[subjectName] = {
                    total: gradeValue,
                    count: 1
                };
            } else {
                subjects[subjectName].total += gradeValue;
                subjects[subjectName].count += 1;
            }
        });
        const averages = Object.keys(subjects).map((subject)=>({
                subject,
                average: subjects[subject].total / subjects[subject].count,
                count: subjects[subject].count
            }));
        return averages;
    };
    // Get grade distribution
    const getGradeDistribution = ()=>{
        const distribution = {
            excellent: 0,
            good: 0,
            satisfactory: 0,
            insufficient: 0
        };
        grades.forEach((grade)=>{
            const value = Number.parseFloat(grade.grade);
            if (value >= 5.5) distribution.excellent++;
            else if (value >= 4.5) distribution.good++;
            else if (value >= 4.0) distribution.satisfactory++;
            else distribution.insufficient++;
        });
        return distribution;
    };
    // Validate form inputs
    const validateInputs = ()=>{
        let isValid = true;
        const newErrors = {
            subject: "",
            grade: ""
        };
        if (!subject.trim()) {
            newErrors.subject = "Bitte gib ein Fach ein";
            isValid = false;
        }
        if (!grade) {
            newErrors.grade = "Bitte gib eine Note ein";
            isValid = false;
        } else {
            const gradeValue = Number.parseFloat(grade);
            if (isNaN(gradeValue) || gradeValue < 1 || gradeValue > 6) {
                newErrors.grade = "Die Note muss zwischen 1 und 6 liegen";
                isValid = false;
            }
        }
        setErrors(newErrors);
        return isValid;
    };
    // Handle form submission to save a new grade
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateInputs()) {
            return;
        }
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/grades", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subject,
                    grade: Number.parseFloat(grade)
                })
            });
            const data = await res.json();
            if (data.success) {
                const newGrade = {
                    _id: data.id,
                    subject,
                    grade: Number.parseFloat(grade),
                    createdAt: new Date().toISOString()
                };
                setGrades((prevGrades)=>[
                        ...prevGrades,
                        newGrade
                    ]);
                setSubject("");
                setGrade("");
                showNotification("success", "Note gespeichert", `Die Note für ${subject} wurde erfolgreich gespeichert.`);
            } else {
                showNotification("error", "Fehler beim Speichern", data.error || "Die Note konnte nicht gespeichert werden.");
            }
        } catch (error) {
            console.error("Error saving grade:", error);
            showNotification("error", "Verbindungsfehler", "Es konnte keine Verbindung zum Server hergestellt werden.");
        } finally{
            setIsSubmitting(false);
        }
    };
    // Handle grade deletion
    const handleDeleteGrade = async (id)=>{
        setIsSubmitting(true);
        try {
            // Log the ID being deleted for debugging
            console.log(`Deleting grade with ID: ${id}`);
            const res = await fetch(`/api/grades/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            // Log the response status for debugging
            console.log(`Delete response status: ${res.status}`);
            // Handle non-JSON responses
            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error(`Server returned non-JSON response: ${await res.text()}`);
            }
            const data = await res.json();
            console.log("Delete response data:", data);
            if (data.success) {
                // Update the grades state by filtering out the deleted grade
                setGrades((prevGrades)=>{
                    const updatedGrades = prevGrades.filter((grade)=>grade._id !== id);
                    return updatedGrades;
                });
                showNotification("success", "Note gelöscht", "Die Note wurde erfolgreich gelöscht.");
            } else {
                showNotification("error", "Fehler beim Löschen", data.error || "Die Note konnte nicht gelöscht werden.");
            }
        } catch (error) {
            console.error("Error deleting grade:", error);
            showNotification("error", "Verbindungsfehler", `Fehler beim Löschen: ${error.message}`);
        } finally{
            setIsSubmitting(false);
            setDeleteConfirmation({
                show: false,
                gradeId: null
            });
        }
    };
    // Show delete confirmation modal
    const confirmDelete = (id)=>{
        setDeleteConfirmation({
            show: true,
            gradeId: id
        });
    };
    // Calculate the average grade
    const average = calculateAverage();
    const distribution = getGradeDistribution();
    const subjectAverages = calculateSubjectAverages();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingAnimation, {}, void 0, false, {
                fileName: "[project]/src/app/noten/page.jsx",
                lineNumber: 277,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container} ${pageLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaded : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageTitle,
                                children: "Noten"
                            }, void 0, false, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageDescription,
                                children: "Hier kannst du deine Noten eintragen und deinen Notendurchschnitt berechnen."
                            }, void 0, false, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/noten/page.jsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationContainer,
                        children: notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notification} ${notification.type === "success" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationSuccess : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationError}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationIcon,
                                        children: notification.type === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationIconSvg,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "22 4 12 14.01 9 11.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 307,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationIconSvg,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "16",
                                                    x2: "12.01",
                                                    y2: "16"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationTitle,
                                                children: notification.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationMessage,
                                                children: notification.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, notification.id, true, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/noten/page.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    deleteConfirmation.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalAnimation}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                                    children: "Note löschen"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/noten/page.jsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                                    children: "Bist du sicher, dass du diese Note löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/noten/page.jsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton} animated-button`,
                                            onClick: ()=>setDeleteConfirmation({
                                                    show: false,
                                                    gradeId: null
                                                }),
                                            disabled: isSubmitting,
                                            children: "Abbrechen"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].confirmButton} animated-button`,
                                            onClick: ()=>handleDeleteGrade(deleteConfirmation.gradeId),
                                            disabled: isSubmitting,
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonLoader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderDot
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderDot
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderDot
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 359,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 356,
                                                columnNumber: 21
                                            }, this) : "Löschen"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/noten/page.jsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/noten/page.jsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/noten/page.jsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsSection} ${animateStats ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animateStats : ""}`,
                        ref: statsRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Notenstatistik"
                            }, void 0, false, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].averageCard}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsIcon,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M7 21h10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 3v18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/noten/page.jsx",
                                                            lineNumber: 377,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 376,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsTitle,
                                                        children: "Notendurchschnitt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 393,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 375,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].averageValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].countUp}`,
                                                "data-grade": getGradeCategory(average),
                                                children: average.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsFooter,
                                                children: [
                                                    "Basierend auf ",
                                                    grades.length,
                                                    " ",
                                                    grades.length === 1 ? "Note" : "Noten"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionCard}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsIcon,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3v18h18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M18 17V9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M13 17V5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M8 17v-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/noten/page.jsx",
                                                            lineNumber: 406,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 405,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statisticsTitle,
                                                        children: "Notenverteilung"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 421,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionGrid,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionItem,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionLabel,
                                                                children: "Sehr gut"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 425,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBar,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBarFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].excellent} ${animateStats ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animate : ""}`,
                                                                    style: {
                                                                        width: grades.length ? `${distribution.excellent / grades.length * 100}%` : "0%"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 426,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionCount,
                                                                children: distribution.excellent
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 432,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 424,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionItem,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionLabel,
                                                                children: "Gut"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 435,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBar,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBarFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].good} ${animateStats ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animate : ""}`,
                                                                    style: {
                                                                        width: grades.length ? `${distribution.good / grades.length * 100}%` : "0%"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 436,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionCount,
                                                                children: distribution.good
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 442,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 434,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionItem,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionLabel,
                                                                children: "Genügend"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 445,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBar,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBarFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].satisfactory} ${animateStats ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animate : ""}`,
                                                                    style: {
                                                                        width: grades.length ? `${distribution.satisfactory / grades.length * 100}%` : "0%"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 446,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionCount,
                                                                children: distribution.satisfactory
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 452,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 444,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionItem,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionLabel,
                                                                children: "Ungenügend"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 455,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBar,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionBarFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].insufficient} ${animateStats ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animate : ""}`,
                                                                    style: {
                                                                        width: grades.length ? `${distribution.insufficient / grades.length * 100}%` : "0%"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 456,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].distributionCount,
                                                                children: distribution.insufficient
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 462,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 454,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 423,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/noten/page.jsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    subjectAverages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subjectAverages} ${pageLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeIn : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Durchschnitt pro Fach"
                            }, void 0, false, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subjectGrid} stagger-animation animate`,
                                children: subjectAverages.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subjectCard} card-hover`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subjectName,
                                                children: item.subject
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 476,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subjectAverage,
                                                style: {
                                                    color: getGradeColor(item.average)
                                                },
                                                children: item.average.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subjectCount,
                                                children: [
                                                    item.count,
                                                    " ",
                                                    item.count === 1 ? "Note" : "Noten"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 475,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/noten/page.jsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSection} ${pageLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideIn : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "subject",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Fach:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "subject",
                                            value: subject,
                                            onChange: (e)=>setSubject(e.target.value),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.subject ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error : ""}`,
                                            placeholder: "z.B. Mathematik",
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 496,
                                            columnNumber: 15
                                        }, this),
                                        errors.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldError,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldErrorIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 517,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "8",
                                                                x2: "12",
                                                                y2: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 518,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "16",
                                                                x2: "12.01",
                                                                y2: "16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 519,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 508,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 507,
                                                    columnNumber: 19
                                                }, this),
                                                errors.subject
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 506,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/noten/page.jsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "grade",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 527,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            id: "grade",
                                            value: grade,
                                            onChange: (e)=>setGrade(e.target.value),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input} ${errors.grade ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error : ""}`,
                                            min: "1",
                                            max: "6",
                                            step: "0.1",
                                            placeholder: "1.0 - 6.0",
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        errors.grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldError,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldErrorIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 554,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "8",
                                                                x2: "12",
                                                                y2: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 555,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "16",
                                                                x2: "12.01",
                                                                y2: "16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 556,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this),
                                                errors.grade
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/noten/page.jsx",
                                            lineNumber: 543,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/noten/page.jsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton} animated-button`,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonLoader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderDot
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 566,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderDot
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loaderDot
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 568,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this) : "Note speichern"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/noten/page.jsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/noten/page.jsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/noten/page.jsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradesSection} ${pageLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeIn : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Gespeicherte Noten"
                            }, void 0, false, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 579,
                                columnNumber: 11
                            }, this),
                            grades.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradesList} stagger-animation animate`,
                                children: grades.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeItem} card-hover`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeSubject,
                                                        children: entry.subject
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 585,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeDate,
                                                        children: [
                                                            "Eingetragen am: ",
                                                            new Date(entry.createdAt).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 586,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 584,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeValue} ${getGradeValueClass(Number.parseFloat(entry.grade))}`,
                                                children: Number.parseFloat(entry.grade).toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 590,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeActions,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton,
                                                    onClick: ()=>confirmDelete(entry._id),
                                                    "aria-label": "Note löschen",
                                                    disabled: isSubmitting,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 6h18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 609,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 610,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 611,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "10",
                                                                y1: "11",
                                                                x2: "10",
                                                                y2: "17"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 612,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "14",
                                                                y1: "11",
                                                                x2: "14",
                                                                y2: "17"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noten/page.jsx",
                                                                lineNumber: 613,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/noten/page.jsx",
                                                        lineNumber: 600,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noten/page.jsx",
                                                    lineNumber: 594,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noten/page.jsx",
                                                lineNumber: 593,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, entry._id, true, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 583,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyMessage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyAnimation}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyIcon,
                                        children: "📝"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Keine Noten vorhanden. Füge deine erste Note hinzu!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/noten/page.jsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/noten/page.jsx",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/noten/page.jsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/noten/page.jsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// Helper function to determine grade category for styling
function getGradeCategory(grade) {
    if (grade >= 5.5) return "excellent";
    if (grade >= 4.5) return "good";
    if (grade >= 4.0) return "satisfactory";
    return "insufficient";
}
// Helper function to get class name for grade value
function getGradeValueClass(grade) {
    if (grade >= 5.5) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeExcellent;
    if (grade >= 4.5) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeGood;
    if (grade >= 4.0) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeSatisfactory;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noten$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gradeInsufficient;
}
// Helper function to get color for grade value
function getGradeColor(grade) {
    if (grade >= 5.5) return "var(--color-success-600)";
    if (grade >= 4.5) return "var(--color-secondary-600)";
    if (grade >= 4.0) return "var(--color-warning-600)";
    return "var(--color-danger-600)";
}
}}),

};

//# sourceMappingURL=src_app_noten_c917023d._.js.map