export default function isOverEduSession(sessionData: {
  id: string;
  time: Date;
  phoneNumber: string;
}) {
  if (!!sessionData.id) {
    const nowTime = new Date();
    const difference = nowTime.getTime() - sessionData.time.getTime();
    if (difference < 300000) {
      return true;
    }
  }
}
