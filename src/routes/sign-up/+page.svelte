<script>
    import axios from "axios";
    let username ="";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let error = "";
    let success = "";

    async function register(event) {
        event.preventDefault();
        if(password !== confirmPassword) {
            error = "패스워드가 일치하지 않습니다."
            success ="";
            return;
        }
        try {
            const res = await axios.post('/api/register', {
                username, email, password
            });

            success = response.data.message;
            error = "";
        } catch (error) {
            error = error.response ? error.response.data.error : "error 발생";
            success ="";
        }
        
    }
</script>

<div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
      <h1 class="text-3xl font-semibold text-center text-purple-700">스콜 회원가입</h1>
      <form class="space-y-4" on:submit={register}>
        <div>
          <label class="label">
            <span class="text-base label-text">이름</span>
          </label>
          <input type="text" placeholder="이름" class="w-full input input-bordered input-primary" bind:value={username} required />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">이메일</span>
          </label>
          <input type="email" placeholder="이메일 주소" class="w-full input input-bordered input-primary" bind:value={email} required />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">비밀번호</span>
          </label>
          <input type="password" placeholder="비밀번호 입력" class="w-full input input-bordered input-primary" bind:value={password} required />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">비밀번호 재입력</span>
          </label>
          <input type="password" placeholder="비밀번호 재입력" class="w-full input input-bordered input-primary" bind:value={confirmPassword} required />
        </div>
        <div class="mb-2">
          <button type="submit" class="btn btn-block btn-primary">회원가입</button>
        </div>
        <div class="mt-2">
          <span>계정이 있으신가요?
            <a href="#" class="text-purple-600 hover:underline">로그인</a>
          </span>
        </div>
      </form>
      {#if error}
        <p style="color: red;">{error}</p>
      {/if}
      {#if success}
        <p style="color: green;">{success}</p>
      {/if}
    </div>
  </div>