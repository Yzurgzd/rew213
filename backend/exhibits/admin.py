from django import forms
from django.contrib import admin
from .models import Exhibit, Category
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.utils.safestring import mark_safe


class ExhibitAdminForm(forms.ModelForm):
    description = forms.CharField(
        label='Описание', widget=CKEditorUploadingWidget())

    class Meta:
        model = Exhibit
        fields = '__all__'


@admin.register(Exhibit)
class ExhibitAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_image', 'name')
    search_fields = ('name',)
    list_filter = ('category', 'date_added')
    form = ExhibitAdminForm
    readonly_fields = ('get_image', 'date_added')

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.photo.url} width="auto" height="75"')
    get_image.short_description = 'Фотография'


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug')
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',), }
