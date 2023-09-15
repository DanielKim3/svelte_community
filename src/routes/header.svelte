<script>
  import logo from "../assets/logo.png"
</script>

<div class="navbar bg-base-300 flex justify-between h-24">
  <div>
    <a href="/" class="text-lg font-bold">
      <img src={logo} alt="로고" class="w-10 ml-5">
    </a>
  </div> 
  <div>
      <a href="/dev" class="btn btn-ghost rounded-btn">개발 커뮤니티</a>
      <a href="/designer" class="btn btn-ghost rounded-btn">디자인 커뮤니티</a>
      <a href="/pm" class="btn btn-ghost rounded-btn">기획 커뮤니티</a>
      <a href="/study" class="btn btn-ghost rounded-btn">스터디 커뮤니티</a>
      <a href="/job-seeker" class="btn btn-ghost rounded-btn">취준생 커뮤니티</a>
  </div>
  <div  >
    <a href="/login" class="btn btn-ghost rounded-btn">로그인</a>
    <a href="#top" class="btn btn-ghost rounded-btn">회원가입</a>
</div>
</div>