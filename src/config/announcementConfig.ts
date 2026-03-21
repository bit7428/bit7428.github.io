import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "小窝门口的声明",

	// 公告内容
	content: "(如果你也喜欢茜特菈莉那么)欢迎来到我的博客！基本完工了喵，目前所有的链接都指向主题原作者和文档，如果你喜欢这个主题，一定要支持原作者喵",

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
