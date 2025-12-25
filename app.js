function analyze(){
  const result = document.getElementById("result");
  result.innerHTML = "⏳ กำลังเตรียมระบบวิเคราะห์...";

  setTimeout(()=>{
    result.innerHTML = "✅ ระบบพร้อมใช้งานแล้ว";
  }, 1500);
}
