   export const socialToColor = (social: string) => {
        switch (social) {
            case 'telegram':
                return 'bg-telegram';
            case 'tableau':
                return 'bg-tableau';
            case 'github':
                return 'bg-github';
            case 'linkedin':
                return 'bg-linkedin';
        }
    };