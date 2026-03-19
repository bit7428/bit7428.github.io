import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "小窝门口的声明",

	// 公告内容
	content: "(如果你也喜欢茜特菈莉那么)欢迎来到我的博客！目前还在建设中，可怜的老酸奶要暂时和流萤挤一个被窝了~",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
